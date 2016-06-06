var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
	// res.sendFile('index.html', {root: __dirname});
	res.redirect('/chat');
	// next();
});

router.get('/chat', function (req, res) {
	res.sendFile('chat.html', {root: __dirname});
});

module.exports = router;
