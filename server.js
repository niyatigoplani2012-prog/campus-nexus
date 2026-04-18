require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bcrypt = require('bcryptjs');
const path = require('path');
const pool = require('./database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
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
        const [result] = await pool.query(
            'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
            [name, email, hashed]
        );
        req.session.userId = result.insertId;
        req.session.userEmail = email;
        res.json({ message: 'Registered successfully', userId: result.insertId });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY')
            return res.status(400).json({ error: 'Email already exists' });
        res.status(500).json({ error: 'Registration failed: ' + err.message });
    }
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const [rows] = await pool.query('SELECT * FROM users WHERE email = ?', [email]);
        const user = rows[0];
        if (!user) return res.status(401).json({ error: 'Invalid email or password' });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: 'Invalid email or password' });
        req.session.userId = user.id;
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
        const [rows] = await pool.query(
            'SELECT id, name, email, bio, skills, github, linkedin, department, year FROM users WHERE id = ?',
            [req.session.userId]
        );
        if (!rows[0]) return res.status(404).json({ error: 'User not found' });
        res.json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch user' });
    }
});

app.put('/api/users/profile', isAuthenticated, async (req, res) => {
    const { bio, skills, github, linkedin, department, year } = req.body;
    try {
        await pool.query(
            'UPDATE users SET bio=?, skills=?, github=?, linkedin=?, department=?, year=? WHERE id=?',
            [bio || null, skills || null, github || null, linkedin || null, department || null, year || null, req.session.userId]
        );
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
        const [result] = await pool.query(
            'INSERT INTO projects (title, description, skills_required, category, team_size, owner_id) VALUES (?, ?, ?, ?, ?, ?)',
            [title, description, skills_required, category || 'General', team_size || 3, req.session.userId]
        );
        res.json({ message: 'Project posted', projectId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: 'Failed to post project' });
    }
});

app.get('/api/projects', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT p.*, u.name as owner_name FROM projects p JOIN users u ON p.owner_id = u.id ORDER BY p.created_at DESC'
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch projects' });
    }
});

app.delete('/api/projects/:id', isAuthenticated, async (req, res) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM projects WHERE id = ? AND owner_id = ?',
            [req.params.id, req.session.userId]
        );
        if (result.affectedRows === 0)
            return res.status(403).json({ error: 'Not authorized or project not found' });
        res.json({ message: 'Project deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete project' });
    }
});

app.put('/api/projects/:id/status', isAuthenticated, async (req, res) => {
    const { status } = req.body;
    try {
        await pool.query(
            'UPDATE projects SET status = ? WHERE id = ? AND owner_id = ?',
            [status, req.params.id, req.session.userId]
        );
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
        await pool.query(
            'INSERT INTO applications (project_id, applicant_id, message) VALUES (?, ?, ?)',
            [project_id, req.session.userId, message || null]
        );
        res.json({ message: 'Application submitted' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY')
            return res.status(400).json({ error: 'Already applied to this project' });
        res.status(500).json({ error: 'Failed to apply' });
    }
});

// Applications received on MY projects
app.get('/api/applications/received', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT a.id, a.status, a.message, a.created_at,
                   u.name as applicant_name, u.id as applicant_id,
                   u.skills as applicant_skills,
                   p.title as project_title, p.id as project_id
            FROM applications a
            JOIN projects p ON a.project_id = p.id
            JOIN users u ON a.applicant_id = u.id
            WHERE p.owner_id = ?
            ORDER BY a.created_at DESC
        `, [req.session.userId]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch applications' });
    }
});

// Applications I SENT
app.get('/api/applications/sent', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT a.id, a.status, a.message, a.created_at,
                   p.title as project_title, p.id as project_id,
                   p.category, u.name as owner_name
            FROM applications a
            JOIN projects p ON a.project_id = p.id
            JOIN users u ON p.owner_id = u.id
            WHERE a.applicant_id = ?
            ORDER BY a.created_at DESC
        `, [req.session.userId]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch sent applications' });
    }
});

app.put('/api/applications/:id', isAuthenticated, async (req, res) => {
    const { status } = req.body;
    try {
        const [result] = await pool.query(`
            UPDATE applications SET status = ?
            WHERE id = ? AND project_id IN (SELECT id FROM projects WHERE owner_id = ?)
        `, [status, req.params.id, req.session.userId]);
        if (result.affectedRows === 0)
            return res.status(403).json({ error: 'Not authorized' });
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
        const [result] = await pool.query(
            'INSERT INTO events (title, description, event_date, event_type, location, max_attendees, organizer_id) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [title, description, event_date, event_type || 'General', location || '', max_attendees || 0, req.session.userId]
        );
        res.json({ message: 'Event created', eventId: result.insertId });
    } catch (err) {
        res.status(500).json({ error: 'Failed to create event' });
    }
});

app.get('/api/events', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT e.*, u.name as organizer_name,
                   (SELECT COUNT(*) FROM event_registrations er WHERE er.event_id = e.id) as attendee_count
            FROM events e
            JOIN users u ON e.organizer_id = u.id
            ORDER BY e.event_date ASC
        `);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch events' });
    }
});

app.post('/api/events/:id/register', isAuthenticated, async (req, res) => {
    try {
        await pool.query(
            'INSERT INTO event_registrations (event_id, user_id) VALUES (?, ?)',
            [req.params.id, req.session.userId]
        );
        res.json({ message: 'Registered for event' });
    } catch (err) {
        if (err.code === 'ER_DUP_ENTRY')
            return res.status(400).json({ error: 'Already registered' });
        res.status(500).json({ error: 'Failed to register' });
    }
});

app.delete('/api/events/:id', isAuthenticated, async (req, res) => {
    try {
        const [result] = await pool.query(
            'DELETE FROM events WHERE id = ? AND organizer_id = ?',
            [req.params.id, req.session.userId]
        );
        if (result.affectedRows === 0)
            return res.status(403).json({ error: 'Not authorized' });
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
        await pool.query(
            'INSERT INTO messages (sender_id, receiver_id, content) VALUES (?, ?, ?)',
            [req.session.userId, receiver_id, content]
        );
        res.json({ message: 'Message sent' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to send message' });
    }
});

app.get('/api/messages', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await pool.query(`
            SELECT m.*, s.name as sender_name, r.name as receiver_name
            FROM messages m
            JOIN users s ON m.sender_id = s.id
            JOIN users r ON m.receiver_id = r.id
            WHERE m.sender_id = ? OR m.receiver_id = ?
            ORDER BY m.created_at ASC
        `, [req.session.userId, req.session.userId]);
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch messages' });
    }
});

app.get('/api/users', isAuthenticated, async (req, res) => {
    try {
        const [rows] = await pool.query(
            'SELECT id, name, email, department, year, skills FROM users WHERE id != ? ORDER BY name',
            [req.session.userId]
        );
        res.json(rows);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

// ======================== //
//      MANAGEMENT          //
// ======================== //

app.get('/api/management/stats', isAuthenticated, async (req, res) => {
    try {
        const [myProjects] = await pool.query(
            'SELECT p.*, (SELECT COUNT(*) FROM applications a WHERE a.project_id = p.id) as app_count, (SELECT COUNT(*) FROM applications a WHERE a.project_id = p.id AND a.status = "Pending") as pending_count FROM projects p WHERE p.owner_id = ? ORDER BY p.created_at DESC',
            [req.session.userId]
        );
        const [myEvents] = await pool.query(
            'SELECT e.*, (SELECT COUNT(*) FROM event_registrations er WHERE er.event_id = e.id) as reg_count FROM events e WHERE e.organizer_id = ? ORDER BY e.event_date DESC',
            [req.session.userId]
        );
        const [sentApps] = await pool.query(
            'SELECT COUNT(*) as total, SUM(status="Accepted") as accepted, SUM(status="Pending") as pending, SUM(status="Rejected") as rejected FROM applications WHERE applicant_id = ?',
            [req.session.userId]
        );
        res.json({ myProjects, myEvents, sentApplications: sentApps[0] });
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch stats' });
    }
});

// Fallback
app.get('*', (req, res) => {
    if (req.path.startsWith('/api')) {
        return res.status(404).json({ error: 'Not found' });
    }
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const server = app.listen(PORT, () => {
    console.log(`🚀 Campus Nexus running at http://localhost:${PORT}`);
});

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.error(`\n❌ Error: Port ${PORT} is already in use.`);
        console.error(`💡 Tip: Another instance of the server is likely running. You can kill it or use a different port in your .env file.\n`);
        process.exit(1);
    } else {
        console.error('❌ Server error:', err);
    }
});
