// this file will be responsible for database connection between server.js and mongoose 

const mongoose = require('mongoose');

// define the MongoDB connection URL
// const mongoURL = 'mongodb://localhost:27017/hotels';
// connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/hotels');


// get the default connection
// Mongoose maintains a default connection object representing the connection to the database(mongoDB)
const db = mongoose.connection;

// defining event listeners
db.on('connected', () => {
    console.log('Connected to MongoDB server!');
});
db.on('error', (err) => {
    console.error('MongoDB connection error!:', err);
});
db.on('disconnected', () => {
    console.log('Disconnected from MongoDB server!');
});

// Export the database connection
module.exports = db;

