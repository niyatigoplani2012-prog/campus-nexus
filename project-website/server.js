require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');

// MongoDB setup
const { mongoose, connectDB } = require('./database');
const {
    User, Project, Application, Event, EventRegistration,
    Message, Note, NoteBookmark, NoteReport, initCounters
} = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'frontendfile')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: 'campus_nexus_secret_key_2025',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));

const isAuthenticated = (req, res, next) => {
    if (req.session.userId) return next();
    res.status(401).json({ error: 'Unauthorized, please log in' });
};

// ======================== //
//      AUTH ROUTES         //
// ======================== //

app.post('/api/register', async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
        return res.status(400).json({ error: 'All fields are required' });
    try {
        const hashed = await bcrypt.hash(password, 10);
        const user = await User.create({ name, email, password: hashed });
        req.session.userId = user._id;
        req.session.userEmail = email;
        res.json({ message: 'Registered successfully', userId: user._id });
    } catch (err) {
        if (err.code === 11000)
            return res.status(400).json({ error: 'Email already exists' });
        res.status(500).json({ error: 'Registration failed: ' + err.message });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(401).json({ error: 'Invalid email or password' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });
        req.session.userId = user._id;
        req.session.userEmail = user.email;
        res.json({ message: 'Logged in successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Login failed' });
    }
});

app.post('/api/logout', (req, res) => {
    req.session.destroy();
    res.json({ message: 'Logged out' });
});

app.get('/api/me', isAuthenticated, async (req, res) => {
    try {
        const user = await User.findById(req.session.userId).select('id name email bio skills github linkedin department year');
        if (!user) return res.status(404).json({ error: 'User not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

app.put('/api/users/profile', isAuthenticated, async (req, res) => {
    const { bio, skills, github, linkedin, department, year } = req.body;
    try {
        await User.findByIdAndUpdate(req.session.userId, {
            bio: bio || null,
            skills: skills || null,
            github: github || null,
            linkedin: linkedin || null,
            department: department || null,
            year: year || null
        }, { runValidators: true });
        res.json({ message: 'Profile updated successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update profile' });
    }
});

// ======================== //
//      PROJECTS            //
// ======================== //

app.post('/api/projects', isAuthenticated, async (req, res) => {
    const { title, description, skills_required, category, team_size } = req.body;
    try {
        const project = await Project.create({
            title, description, skills_required,
            category: category || 'General',
            team_size: team_size || 3,
            owner_id: req.session.userId
        });
        res.json({ message: 'Project posted', projectId: project._id });
    } catch (err) {
        res.status(500).json({ error: 'Failed to post project' });
    }
});

app.get('/api/projects', isAuthenticated, async (req, res) => {
    try {
        const projects = await Project.find().populate('owner_id', 'name').sort('-created_at');
        const response = projects.map(p => {
            const j = p.toJSON();
            j.owner_name = p.owner_id ? p.owner_id.name : null;
            j.owner_id = p.owner_id ? p.owner_id._id : p.owner_id;
            return j;
        });
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

app.delete('/api/projects/:id', isAuthenticated, async (req, res) => {
    try {
        const result = await Project.deleteOne({ _id: req.params.id, owner_id: req.session.userId });
        if (result.deletedCount === 0)
            return res.status(403).json({ error: 'Not authorized or project not found' });
        
        // Emulate CASCADE delete
        await Application.deleteMany({ project_id: req.params.id });
        
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

app.put('/api/projects/:id/status', isAuthenticated, async (req, res) => {
    const { status } = req.body;
    try {
        await Project.updateOne({ _id: req.params.id, owner_id: req.session.userId }, { status }, { runValidators: true });
        res.json({ message: 'Status updated' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update status' });
    }
});

// ======================== //
//      APPLICATIONS        //
// ======================== //

app.post('/api/applications', isAuthenticated, async (req, res) => {
    const { project_id, message } = req.body;
    try {
        await Application.create({
            project_id,
            applicant_id: req.session.userId,
            message: message || null
        });
        res.json({ message: 'Application submitted' });
    } catch (err) {
        if (err.code === 11000)
            return res.status(400).json({ error: 'Already applied to this project' });
        res.status(500).json({ error: 'Failed to apply' });
    }
});

// Applications received on MY projects
app.get('/api/applications/received', isAuthenticated, async (req, res) => {
    try {
        const apps = await Application.find()
            .populate({ path: 'project_id', match: { owner_id: req.session.userId }, select: 'title _id' })
            .populate({ path: 'applicant_id', select: 'name skills _id' })
            .sort('-created_at');
            
        const filtered = apps.filter(a => a.project_id != null);
        const response = filtered.map(a => {
            return {
                id: a._id,
                status: a.status,
                message: a.message,
                created_at: a.created_at,
                applicant_name: a.applicant_id ? a.applicant_id.name : null,
                applicant_id: a.applicant_id ? a.applicant_id._id : null,
                applicant_skills: a.applicant_id ? a.applicant_id.skills : null,
                project_title: a.project_id ? a.project_id.title : null,
                project_id: a.project_id ? a.project_id._id : null
            };
        });
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
});

// Applications I SENT
app.get('/api/applications/sent', isAuthenticated, async (req, res) => {
    try {
        const apps = await Application.find({ applicant_id: req.session.userId })
            .populate({ path: 'project_id', populate: { path: 'owner_id', select: 'name' } })
            .sort('-created_at');
            
        const response = apps.map(a => {
            return {
                id: a._id,
                status: a.status,
                message: a.message,
                created_at: a.created_at,
                project_title: a.project_id ? a.project_id.title : null,
                project_id: a.project_id ? a.project_id._id : null,
                category: a.project_id ? a.project_id.category : null,
                owner_name: (a.project_id && a.project_id.owner_id) ? a.project_id.owner_id.name : null
            };
        });
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch sent applications' });
    }
});

app.put('/api/applications/:id', isAuthenticated, async (req, res) => {
    const { status } = req.body;
    try {
        const appRecord = await Application.findById(req.params.id);
        if (!appRecord) return res.status(403).json({ error: 'Not authorized' });
        const project = await Project.findOne({ _id: appRecord.project_id, owner_id: req.session.userId });
        if (!project) return res.status(403).json({ error: 'Not authorized' });
        
        appRecord.status = status;
        await appRecord.save();
        res.json({ message: 'Application updated' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update application' });
    }
});

// ======================== //
//      EVENTS              //
// ======================== //

app.post('/api/events', isAuthenticated, async (req, res) => {
    const { title, description, event_date, event_type, location, max_attendees } = req.body;
    try {
        const event = await Event.create({
            title, description, event_date,
            event_type: event_type || 'General',
            location: location || '',
            max_attendees: max_attendees || 0,
            organizer_id: req.session.userId
        });
        res.json({ message: 'Event created', eventId: event._id });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create event' });
    }
});

app.get('/api/events', isAuthenticated, async (req, res) => {
    try {
        const events = await Event.find().populate('organizer_id', 'name').sort('event_date');
        const response = await Promise.all(events.map(async e => {
            const j = e.toJSON();
            j.organizer_name = e.organizer_id ? e.organizer_id.name : null;
            j.organizer_id = e.organizer_id ? e.organizer_id._id : e.organizer_id;
            j.attendee_count = await EventRegistration.countDocuments({ event_id: e._id });
            return j;
        }));
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

app.post('/api/events/:id/register', isAuthenticated, async (req, res) => {
    try {
        await EventRegistration.create({
            event_id: req.params.id,
            user_id: req.session.userId
        });
        res.json({ message: 'Registered for event' });
    } catch (err) {
        if (err.code === 11000)
            return res.status(400).json({ error: 'Already registered' });
        res.status(500).json({ error: 'Failed to register' });
    }
});

app.delete('/api/events/:id', isAuthenticated, async (req, res) => {
    try {
        const result = await Event.deleteOne({ _id: req.params.id, organizer_id: req.session.userId });
        if (result.deletedCount === 0)
            return res.status(403).json({ error: 'Not authorized' });
            
        // CASCADE
        await EventRegistration.deleteMany({ event_id: req.params.id });
        
        res.json({ message: 'Event deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete event' });
    }
});

// ======================== //
//      MESSAGES            //
// ======================== //

app.post('/api/messages', isAuthenticated, async (req, res) => {
    const { receiver_id, content } = req.body;
    try {
        await Message.create({
            sender_id: req.session.userId,
            receiver_id,
            content
        });
        res.json({ message: 'Message sent' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

app.get('/api/messages', isAuthenticated, async (req, res) => {
    try {
        const messages = await Message.find({
            $or: [{ sender_id: req.session.userId }, { receiver_id: req.session.userId }]
        })
        .populate('sender_id', 'name')
        .populate('receiver_id', 'name')
        .sort('created_at');
        
        const response = messages.map(m => {
            const j = m.toJSON();
            j.sender_name = m.sender_id ? m.sender_id.name : null;
            j.sender_id = m.sender_id ? m.sender_id._id : m.sender_id;
            j.receiver_name = m.receiver_id ? m.receiver_id.name : null;
            j.receiver_id = m.receiver_id ? m.receiver_id._id : m.receiver_id;
            return j;
        });
        res.json(response);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

app.get('/api/users', isAuthenticated, async (req, res) => {
    try {
        const users = await User.find({ _id: { $ne: req.session.userId } })
            .select('id name email department year skills')
            .sort('name');
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// ======================== //
//      MANAGEMENT          //
// ======================== //

app.get('/api/management/stats', isAuthenticated, async (req, res) => {
    try {
        const myProjDocs = await Project.find({ owner_id: req.session.userId }).sort('-created_at');
        const myProjects = await Promise.all(myProjDocs.map(async p => {
            const j = p.toJSON();
            j.app_count = await Application.countDocuments({ project_id: p._id });
            j.pending_count = await Application.countDocuments({ project_id: p._id, status: 'Pending' });
            return j;
        }));
        
        const myEvDocs = await Event.find({ organizer_id: req.session.userId }).sort('-event_date');
        const myEvents = await Promise.all(myEvDocs.map(async e => {
            const j = e.toJSON();
            j.reg_count = await EventRegistration.countDocuments({ event_id: e._id });
            return j;
        }));
        
        const sentApps = await Application.find({ applicant_id: req.session.userId });
        const sentApplications = {
            total: sentApps.length,
            accepted: sentApps.filter(a => a.status === 'Accepted').length,
            pending: sentApps.filter(a => a.status === 'Pending').length,
            rejected: sentApps.filter(a => a.status === 'Rejected').length
        };
        
        res.json({ myProjects, myEvents, sentApplications });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
});

// ======================== //
//      NOTES & RESOURCES   //
// ======================== //

app.get('/api/notes', async (req, res) => {
    try {
        const { dept, semester, file_type, search, sort } = req.query;
        let query = {};

        if (dept) query.department = dept;
        if (semester) query.semester = semester;
        if (file_type) query.file_type = file_type;
        if (search) {
            const regex = { $regex: search, $options: 'i' };
            query.$or = [
                { subject: regex },
                { faculty_name: regex },
                { description: regex },
                { tags: regex }
            ];
        }

        let sortOption = '-created_at';
        if (sort === 'downloads') {
            sortOption = '-downloads';
        } else if (sort === 'rating') {
            sortOption = '-rating';
        }

        const notes = await Note.find(query).sort(sortOption);
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes: ' + err.message });
    }
});

app.post('/api/notes', isAuthenticated, async (req, res) => {
    const { subject, department, semester, faculty_name, file_type, file_size, description, tags, file_url } = req.body;
    if (!subject || !department || !semester || !faculty_name) {
        return res.status(400).json({ error: 'Subject, Department, Semester, and Faculty Name are required' });
    }
    try {
        const note = await Note.create({
            subject, department, semester, faculty_name,
            uploaded_by: req.session.userEmail ? req.session.userEmail.split('@')[0] : 'Faculty',
            uploader_id: req.session.userId,
            file_type: file_type || 'PDF',
            file_size: file_size || '3.2 MB',
            description: description || '',
            tags: tags || '',
            file_url: file_url || '#'
        });
        res.json({ message: 'Note uploaded successfully', noteId: note._id });
    } catch (err) {
        res.status(500).json({ error: 'Failed to upload note: ' + err.message });
    }
});

app.post('/api/notes/:id/download', async (req, res) => {
    try {
        await Note.updateOne({ _id: req.params.id }, { $inc: { downloads: 1 } });
        res.json({ message: 'Download count updated' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to update download count' });
    }
});

app.post('/api/notes/:id/bookmark', isAuthenticated, async (req, res) => {
    try {
        const existing = await NoteBookmark.findOne({ note_id: req.params.id, user_id: req.session.userId });
        if (existing) {
            await NoteBookmark.deleteOne({ note_id: req.params.id, user_id: req.session.userId });
            return res.json({ message: 'Bookmark removed', bookmarked: false });
        } else {
            await NoteBookmark.create({ note_id: req.params.id, user_id: req.session.userId });
            return res.json({ message: 'Bookmark added', bookmarked: true });
        }
    } catch (err) {
        res.status(500).json({ error: 'Failed to update bookmark' });
    }
});

app.post('/api/notes/:id/report', isAuthenticated, async (req, res) => {
    const { reason } = req.body;
    try {
        await NoteReport.create({ note_id: req.params.id, user_id: req.session.userId, reason: reason || 'Inappropriate content' });
        res.json({ message: 'Report submitted successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to report note' });
    }
});

// Fallback
app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'Not found' });
    }
    res.sendFile(path.join(__dirname, 'frontendfile', 'index.html'));
});

connectDB().then(async () => {
    await initCounters();
    app.listen(PORT, () => {
        console.log(`🚀 Campus Nexus running at http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error("Failed to boot app", err);
});
