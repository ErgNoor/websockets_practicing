var http = require('http');
var express = require('express');
var WebSocket = require('ws');

var index = require('./routes/index');

var app = express();
var server = http.createServer(app);
var wss = new WebSocket.Server({server: server});


app.use('/', index);
app.use(express.static('public'));


wss.on('connection', function connection(ws) {
	ws.on('message', function (message) {
		// body...
	});

	ws.on('close', function (ws) {
		console.log('connection closed');
	})
})


server.listen(8084, function () {
	console.log('Listening on: ' + server.address().port);
})
