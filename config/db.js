const mongoose = require("mongoose");
// const config = require("config");
const db = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    mongoose.connect(db);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
