const express = require("express");
const router = express.Router();

// @ route POST api/contacts
// @ desc  Get all users contacts
// @ access Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @ route POST api/contacts
// @ desc Add new contacts
// @ access Private
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @ route PUT api/contacts
// @ desc Update contacts
// @ access Private
router.put("/", (req, res) => {
  res.send("Update contact");
});

// @ route DELETE api/contacts
// @ desc Delete contacts
// @ access Private
router.delete("/", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
