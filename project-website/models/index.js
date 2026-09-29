const mongoose = require('mongoose');
const { Counter, initCounters } = require('./Counter');

// Plugin to auto-increment _id and add toJSON transform
function autoIncrementPlugin(schema, { modelName }) {
    schema.add({
        _id: { type: Number },
        created_at: { type: Date, default: Date.now }
    });

    schema.pre('save', async function () {
        if (this.isNew && this._id == null) {
            const counter = await Counter.findByIdAndUpdate(
                modelName,
                { $inc: { seq: 1 } },
                { new: true, upsert: true }
            );
            this._id = counter.seq;
        }
    });

    schema.set('toJSON', {
        transform: function (doc, ret, options) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    });
}

// User Model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: null },
    skills: { type: String, default: null },
    github: { type: String, default: null },
    linkedin: { type: String, default: null },
    department: { type: String, default: null },
    year: { type: Number, default: null },
});
userSchema.plugin(autoIncrementPlugin, { modelName: 'user' });
const User = mongoose.model('User', userSchema);

// Project Model
const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    skills_required: { type: String, default: null },
    category: { type: String, default: 'General' },
    team_size: { type: Number, default: 3 },
    status: { type: String, default: 'Open' },
    owner_id: { type: Number, ref: 'User' },
});
projectSchema.plugin(autoIncrementPlugin, { modelName: 'project' });
const Project = mongoose.model('Project', projectSchema);

// Application Model
const applicationSchema = new mongoose.Schema({
    project_id: { type: Number, ref: 'Project' },
    applicant_id: { type: Number, ref: 'User' },
    message: { type: String, default: null },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' }
});
applicationSchema.index({ project_id: 1, applicant_id: 1 }, { unique: true });
applicationSchema.plugin(autoIncrementPlugin, { modelName: 'application' });
const Application = mongoose.model('Application', applicationSchema);

// Event Model
const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    event_date: { type: Date, required: true },
    event_type: { type: String, default: 'General' },
    location: { type: String, default: null },
    max_attendees: { type: Number, default: 0 },
    organizer_id: { type: Number, ref: 'User' }
});
eventSchema.plugin(autoIncrementPlugin, { modelName: 'event' });
const Event = mongoose.model('Event', eventSchema);

// Event Registration Model
const eventRegistrationSchema = new mongoose.Schema({
    event_id: { type: Number, ref: 'Event' },
    user_id: { type: Number, ref: 'User' }
});
eventRegistrationSchema.index({ event_id: 1, user_id: 1 }, { unique: true });
eventRegistrationSchema.plugin(autoIncrementPlugin, { modelName: 'event_registration' });
const EventRegistration = mongoose.model('EventRegistration', eventRegistrationSchema);

// Message Model
const messageSchema = new mongoose.Schema({
    sender_id: { type: Number, ref: 'User' },
    receiver_id: { type: Number, ref: 'User' },
    content: { type: String, required: true }
});
messageSchema.plugin(autoIncrementPlugin, { modelName: 'message' });
const Message = mongoose.model('Message', messageSchema);

// Note Model
const noteSchema = new mongoose.Schema({
    subject: { type: String, required: true },
    department: { type: String, required: true },
    semester: { type: String, required: true },
    faculty_name: { type: String, required: true },
    uploaded_by: { type: String, default: 'Faculty' },
    uploader_id: { type: Number, ref: 'User' },
    file_type: { type: String, default: 'PDF' },
    file_size: { type: String, default: '2.4 MB' },
    downloads: { type: Number, default: 0 },
    rating: { type: mongoose.Schema.Types.Decimal128, default: 4.80 },
    description: { type: String, default: null },
    tags: { type: String, default: null },
    file_url: { type: String, default: null }
});
noteSchema.plugin(autoIncrementPlugin, { modelName: 'note' });
noteSchema.set('toJSON', {
    transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        // Fix Decimal128 response
        if (ret.rating) {
            ret.rating = parseFloat(ret.rating.toString());
        }
        return ret;
    }
});
const Note = mongoose.model('Note', noteSchema);

// Note Bookmark Model
const noteBookmarkSchema = new mongoose.Schema({
    note_id: { type: Number, ref: 'Note' },
    user_id: { type: Number, ref: 'User' }
});
noteBookmarkSchema.index({ note_id: 1, user_id: 1 }, { unique: true });
noteBookmarkSchema.plugin(autoIncrementPlugin, { modelName: 'note_bookmark' });
const NoteBookmark = mongoose.model('NoteBookmark', noteBookmarkSchema);

// Note Report Model
const noteReportSchema = new mongoose.Schema({
    note_id: { type: Number, ref: 'Note' },
    user_id: { type: Number, ref: 'User' },
    reason: { type: String, required: true }
});
noteReportSchema.plugin(autoIncrementPlugin, { modelName: 'note_report' });
const NoteReport = mongoose.model('NoteReport', noteReportSchema);

module.exports = {
    User,
    Project,
    Application,
    Event,
    EventRegistration,
    Message,
    Note,
    NoteBookmark,
    NoteReport,
    initCounters
};
