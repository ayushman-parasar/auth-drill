const express = require('express')
const router = express.Router()

const studentRouter = require('./student')
const mentorRouter = require('./mentor')


router.use('/students', studentRouter)
router.use('/mentors', mentorRouter)

module.exports = router