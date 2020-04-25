const express = require("express");
const router = express.Router();

const { createMentor, loginMentor } = require('../../../controllers/mentor')

router.post("/signup", createMentor);
router.post('/login',loginMentor)

module.exports = router