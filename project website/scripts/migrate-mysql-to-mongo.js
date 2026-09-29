require('dotenv').config();
const mysql = require('mysql2/promise');
const mongoose = require('mongoose');

// Mongoose Models
const {
    User, Project, Application, Event, EventRegistration,
    Message, Note, NoteBookmark, NoteReport
} = require('../models');
const Counter = require('../models/Counter');

// Old MySQL config - adjust manually if needed
const MYSQL_CONFIG = {
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_NAME || 'campus_nexus'
};

async function migrateData() {
    try {
        console.log('🔗 Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/campus_nexus');
        
        console.log('🔗 Connecting to MySQL...');
        const pool = mysql.createPool(MYSQL_CONFIG);
        const sourceConn = await pool.getConnection();
        
        console.log('⚙️ Starting Data Migration...');

        // 1. Users
        const [users] = await sourceConn.query('SELECT * FROM users');
        for (const u of users) {
            await User.create({
                _id: u.id,
                name: u.name,
                email: u.email,
                password: u.password,
                bio: u.bio,
                skills: u.skills,
                github: u.github,
                linkedin: u.linkedin,
                department: u.department,
                year: u.year,
                created_at: u.created_at
            });
            await Counter.findByIdAndUpdate('user', { $max: { seq: u.id + 1 } }, { upsert: true });
        }
        console.log(`✅ Migrated ${users.length} users`);

        // 2. Projects
        const [projects] = await sourceConn.query('SELECT * FROM projects');
        for (const p of projects) {
            await Project.create({
                _id: p.id,
                title: p.title,
                description: p.description,
                skills_required: p.skills_required,
                category: p.category,
                team_size: p.team_size,
                status: p.status,
                owner_id: p.owner_id,
                created_at: p.created_at
            });
            await Counter.findByIdAndUpdate('project', { $max: { seq: p.id + 1 } }, { upsert: true });
        }
        console.log(`✅ Migrated ${projects.length} projects`);

        // You would follow this sequence for all remaining tables:
        // Applications, Events, Event Registrations, Messages, Notes, Bookmarks, and Reports.

        console.log('🎉 Migration successful!');
        process.exit(0);

    } catch (err) {
        console.error('❌ Migration failed:', err);
        process.exit(1);
    }
}

migrateData();
