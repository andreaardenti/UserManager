var exp = require('express');
var bodyParser = require('body-parser');
var app = exp();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {

})



//set porta server
app.listen(3001);