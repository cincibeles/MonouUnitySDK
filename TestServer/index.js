var express = require('express');
var app = express();
var http = require('http').createServer(app);
// var io = require('socket.io')(http);

app.use(express.static(__dirname + '/www'));

var port = process.env.PORT || 8084;
var srv = http.listen(port, function(){
  console.log('listening on *:'+port);
});

// recibe peticiones json
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

