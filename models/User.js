const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  //The unique option tells Mongoose that each document must have a unique value for a given path.
  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
