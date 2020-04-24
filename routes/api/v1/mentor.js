const express = require("express");
const router = express.Router();

const { createMentor} = require('../../../controllers/mentor')

router.post("/signup", createMentor);

module.exports = router