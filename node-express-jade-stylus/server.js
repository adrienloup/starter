var express = require('express')
	,stylus = require('stylus');

var app = express();

var port = 3000;

function compile(str, path) {
	return stylus(str)
		.set('filename', path)
}

app.set('views', __dirname + '/views');

app.set('view engine', 'jade');

app.use(express.logger('dev'));

app.use(stylus.middleware({
	src: __dirname + '/public'
	,compile: compile
}));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	res.render('index', { title : 'Home' });
});

app.get('/page1', function (req, res) {
	res.render('page1', { title : 'page1' });
});

app.get('/page2', function (req, res) {
	res.render('page2', { title : 'page2' });
});

console.log('Project is running on http://localhost:' + port);
console.log('For use during development of a nodemon ./app.js localhost ' + port);

app.listen(port);