var express = require('express');
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reservations.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

var tables = [
	{
		name: 'Adam',
		number: '123',
		email: 'email1@dummy.com'
	},
	{
		name: 'Catherine',
		number: '456',
		email: '2ndemail@placeholder.com'
	},
	{
		name: 'Manish',
		number: '789',
		email: 'email3@nothing.com'
	}
]

app.get('/api/tables', function (request, response) {
	 response.json(tables);
})

app.post('/api/tables', function (request, response){
	var newRes = request.body;
	console.log(newRes);
	tables.push(newRes);
	response.json(tables);
})