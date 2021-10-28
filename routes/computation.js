var express = require('express');
var router = express.Router();


/* GET computation listing. */
router.get('/', function (req, res, next) {

    fake_url = "https://fake.com/path" + req.url
    const url = new URL(fake_url)
    const search_params = url.searchParams
    if (req.method === 'GET') {
        value = search_params.get("x")
        if(value === null)

        {
            value = Math.round(Math.random()*900);
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<h3>Hello, Welcome to fwa22bekkari server</h3>');
        res.write('<h4>Random value generated is: '+value + '</h4>');
        res.write('Math.atanh() applied to ' + value + ' is ' + Math.atanh(value))
        res.write('<br/>Math.atanh() applied to ' + value + ' is ' + Math.atanh(value))
        res.write('<br/>Math.cbrt() applied to ' + value + ' is ' + Math.cbrt(value))
        res.end()
    }
});

module.exports = router;