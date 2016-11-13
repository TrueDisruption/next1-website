var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('subscribe',{
  	page_name: 'subscribe'
  });
});

module.exports = router;
