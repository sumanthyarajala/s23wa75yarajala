var express = require('express');
var router = express.Router();
/* GET users listing. */
router.get('/', function (req, res, next) {
    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value = search_params.get("x")
        if(value === null)
        {
            value=Math.round(Math.random()*999);
        }     
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('Math.pow() applied to ' + value + ' is ' + Math.pow(value));
        res.write('<br>Math.sign() applied to ' + value + ' is ' + Math.sign(value))
        res.write('<br>Math.tanh() applied to ' + value + ' is ' + Math.tanh(value))
        res.write('<br>Math.trunc() applied to ' + value + ' is ' + Math.trunc(2,value))
        res.end()
    }

});

module.exports = router;