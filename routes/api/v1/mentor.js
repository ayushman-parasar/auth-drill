const express = require("express");
const router = express.Router();
const auth = require('./../../../modules/auth')

const { createMentor, loginMentor, createTask , showTask} = require('../../../controllers/mentor')

router.post("/signup", createMentor);
router.post('/login',loginMentor)
router.post('/task', auth.checkIfStudent, createTask)
router.get('/', showTask)

module.exports = router