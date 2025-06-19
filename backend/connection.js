const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.MONGODB_URL

mongoose.connect(url)
    .then((result) => {
        console.log('✅ MongoDB Connected');
    })
    .catch((err) => {
        console.error('Error connecting to db:', err.message);
    });

module.exports = mongoose;