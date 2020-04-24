const express = require("express");
const router = express.Router();
const { createMentor, mentorLogin } = require('../../../controllers/mentor')

// router.post("/signup", createMentor);
// router.post("/login", mentorLogin);

module.exports = router