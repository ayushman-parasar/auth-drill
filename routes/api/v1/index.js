var express = require('express');
var router = express.Router();


const studentRouter = require('./student')
const mentorRouter = require('./mentor')
const identifyRouter = require('./identify')

router.use('/students', studentRouter)
router.use('/mentors', mentorRouter)
router.use('/identify',identifyRouter)


module.exports = router;