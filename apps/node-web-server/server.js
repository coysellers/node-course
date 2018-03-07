const express = require('express');
const hbs = require('hbs'); // "Handlebars" view engine for express
const fs = require('fs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

// This is the middleware
// "__dirname" stores path to project directory
// Contcat tells it to use the "/public" directory
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
	const now = new Date().toString();
	const log = `${now}: ${req.method} ${req.url}`;

	console.log(log);
	fs.appendFile('server.log', log + '\n', (err) => {
		if (err) {
			console.log('Unable to append to server.log');
		}
	});
	next();
});

app.use((req, res, next) => {
	res.render('maintenance.hbs');
});

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

// http route handlers
// http get request "url" and "function to run"
// second peram - request and response
app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Homepage',
		message: 'Text is showing up now!!'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About Page'
	});
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'Error handling request'
	});
});

// Binds app to port on our machine
app.listen('3000', () => {
	console.log('Server is up on port 3000');
});