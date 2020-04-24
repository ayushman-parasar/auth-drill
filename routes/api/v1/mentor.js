const express = require("express");
const router = express.Router();
const { createMentor, mentorLogin, createTask , getAlltasks} = require('../../../controllers/mentor')
const auth  = require('../../../modules/auth')
const methods  = require('../../../modules/methods')

router.post("/signup", createMentor);
router.post("/login", mentorLogin);
router.post('/create', auth.verifyToken, methods.checkMentor, createTask)
router.get('/', getAlltasks)


module.exports = router