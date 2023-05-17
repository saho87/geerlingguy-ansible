// Simple Express web server
// http://howtonade.org/getting-started-with-express

//load the express module
var express = require('express');
var app = express();

// Respond to requests for / with "Hello World"
app.get('/', function(req, res){
    res.send('Hello World!');
});

// LIsten on Port 80 (like a true webserver)
app.listen(80);
console.log('Express server stated successfully.');