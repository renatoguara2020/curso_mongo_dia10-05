var express = require('express');
var app = express();

//app.use(express.json());

app.get('/listar', function (req, res) {
    res.send('<html><body><h1>Hello World com Express dia 10/05</h1></body></html>');
});

app.get('/listar/:id', function (req, res) {

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



var server = app.listen(3000, function (req, res) {
    console.log(`Server running at port 3000 with Express`);
});