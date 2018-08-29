var compression = require('compression');
var express = require('express');
var app = express();
var path = require('path');


app.use(compression())

app.use(express.static(__dirname + '/src'));

// viewed at http://localhost:8080
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/src/index.html'));
});

app.listen(80);