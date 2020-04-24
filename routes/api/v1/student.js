const express = require("express");
const router = express.Router();

let { createStudent } = require('../../../controllers/student')

router.post("/signup", createStudent);

module.exports = router