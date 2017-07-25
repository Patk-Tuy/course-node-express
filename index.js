const express = require('express');
const hbs = require('hbs');

var app = express();
const PORT = 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
/*app.use(function(req, res, next){
	res.render('maintenance.hbs');
});*/
app.get('/', function(req, res) {
	res.render('index.hbs', {
		pageTitle: 'Secular Minds',
		currentYear: new Date().getFullYear()
	});
});

app.get('/about', function(req, res){
	res.render('about.hbs', {
		pageTitle: 'About'
	});
});

app.listen(PORT, function(){
	console.log('Server started at: ' + PORT)
});
