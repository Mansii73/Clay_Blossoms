const mongoose = require('../connection');
const { Schema, model } = mongoose;

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    password: { type: String, required: true },
    city: { type: String, default: 'unknown' },
    avatar: { type: String },
    createdAt: { type: Date, default: Date.now }
})

module.exports = model('users', userSchema);