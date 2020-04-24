const express = require("express");
const router = express.Router();
const auth = require('../../../modules/auth')
let { createStudent, studentLogin, getTasks } = require('../../../controllers/student')

router.post("/signup", createStudent);
router.post("/login", studentLogin);
router.get('/', auth.verifyToken , getTasks)

module.exports = router