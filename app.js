var express = require('express');
var app = express();
var formatter = require('./formatter.js');

app.use(express.static('public'));
app.use(express.urlencoded({
    extended: true
}))

app.get('/', function(req, res) {
  res.redirect('index.html');
});

app.post('/api/formatter/format', function(req,res) {
    var text = req.body.text;
    var result = formatter.format(text);
    res.send(result);
});

app.listen(3000, function() {
  console.log('Esperando conexiones en el puerto 3000...');
});
