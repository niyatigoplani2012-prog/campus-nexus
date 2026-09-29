const mongoose = require('mongoose');

const counterSchema = new mongoose.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 1 }
});

const Counter = mongoose.model('Counter', counterSchema);

const initCounters = async () => {
    const models = ['user', 'project', 'application', 'event', 'event_registration', 'message', 'note', 'note_bookmark', 'note_report'];
    for (const model of models) {
        await Counter.findByIdAndUpdate(model, { $setOnInsert: { seq: 1 } }, { upsert: true });
    }
};

module.exports = { Counter, initCounters };
