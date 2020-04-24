const express = require("express");
const router = express.Router();

let { createStudent, studentLogin } = require('../../../controllers/student')

router.post("/signup", createStudent);
router.post('/login',studentLogin)

module.exports = router