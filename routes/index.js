var express = require('express');
var router = express.Router();
const Mentor = require("../models/Mentor")

/* GET home page. */
router.get('/', function(req, res, next) {
  // const mentor1 = Mentor.create({
  //   "email":"m10@gmail.com",
  //   "password":"hello"
  // })
  res.render('index', { title: 'Express' });
});

module.exports = router;
