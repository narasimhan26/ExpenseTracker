const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log(`Connected to MongoDB ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.log(`Error connecting to mongoDB ${err}`.red.bold);
    process.exit(1);
  }
}

module.exports = connectDB; 