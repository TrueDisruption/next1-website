var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('ai-report',{
  	page_name: 'ai-report'
  });
});

module.exports = router;
