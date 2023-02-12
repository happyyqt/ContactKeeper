const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  name: {
    type: String,
    required: true,
  },
  //The unique option tells Mongoose that each document must have a unique value for a given path.
  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
  },

  type: {
    type: String,
    default: "personal",
  },

  date: {
    type: Date,
    default: Date.now,
  },
});
// register the schema with mongoose. 
// the model can be accessed by mongoose.model("contact")
module.exports = mongoose.model("contact", ContactSchema);
