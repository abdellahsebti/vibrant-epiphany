
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // Use the remote MongoDB connection URI
    // This is for local development only, the deployed backend already has its configuration
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
