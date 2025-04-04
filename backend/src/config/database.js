const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://arnavkesari13:PGl6XauYuABQ1CO5@hackbyte.wq7nmwt.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;