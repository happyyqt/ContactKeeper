const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const Contact = require("../models/Contact");
const config = require("config");
const auth = require("../middleware/auth");
const bcrypt = require("bcryptjs");
// @ route POST api/contacts
// @ desc  Get all users contacts
// @ access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @ route POST api/contacts
// @ desc Add new contacts
// @ access Private
router.post(
  "/",
  auth,
  body("name", "Name is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, type } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        phone,
        type,
        user: req.user.id,
      });

      const contact = await newContact.save();
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @ route PUT api/contacts
// @ desc Update contacts
// @ access Private
router.put("/", auth, async (req, res) => {
  const { name, email, phone, type } = req.body;

  // Build contact object
  const contactFields = {};
  if (name) contactFields.name = name;
});

// @ route DELETE api/contacts
// @ desc Delete contacts
// @ access Private
router.delete("/", (req, res) => {
  res.send("Delete contact");
});

module.exports = router;
