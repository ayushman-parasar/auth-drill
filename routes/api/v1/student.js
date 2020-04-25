const express = require("express");
const router = express.Router();
const auth = require('../../../modules/auth')

let { createStudent, studentLogin,showTasks } = require('../../../controllers/student')

router.post("/signup", createStudent);
router.post('/login',studentLogin)
router.get('/', auth.checkIfStudent, showTasks)

module.exports = router