const express = require("express");
const router = express.Router();

// @ route POST api/auth
// @ desc Get logged in user
// @ access Private
router.get("/", (req, res) => {
  res.send("Get logged in user");
});

// @ route POST api/auth
// @ desc Auth user and get token
// @ access Public
router.post("/", (req, res) => {
  res.send("log in user");
});

module.exports = router;
