require('dotenv').config();
const mongoose = require('mongoose');
const dns = require('dns');

// Force Node.js to use Google's DNS to bypass ISP/Router TCP DNS blocks on Windows
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) {
            throw new Error('MONGO_URI is not defined in environment variables.');
        }
        
        await mongoose.connect(uri);
        console.log('✅ MongoDB connected successfully to Atlas');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        throw err;
    }
};

module.exports = { mongoose, connectDB };