var express = require('express');
var router = express.Router();
let sum = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  sum = sum+1
  res.send('sum is: '+sum);
});

module.exports = router;