var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('iot-report', { title: 'iot report' });
});

module.exports = router;
