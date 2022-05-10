var express = require('express');
var app = express();

app.use(express.json);

app.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World com Express dia 10/05</h1></body></html>');
});

app.get('/id:', function (req, res) {

    res.send('<html><body><h1>Hello World com Express e ID do GET')
});

app.post('/submit-data', function (req, res) {
    res.send('POST Request');
});

app.put('/update-data', function (req, res) {
    res.send('PUT Request');
});

app.delete('/delete-data', function (req, res) {
    res.send('DELETE Request');
});

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});