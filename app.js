var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var users = require('./node_modules/');
var user = require('./routes/users');
app.use('/users', user);

//var middleware = require('./auth')

//set porta server
app.listen(3001);

module.exports = app;

app.get('/', function(req, res) {
    res.json({message: 'Benvenuto nel server di USER MANAGER!'})
})

//----------DELETE----------
//cancello un User in base all'ID
app.delete('/users/:id', function(req, res) {
    var id = parseInt(req.params.id);
    res.json(users.removeUser(id));
})

//------------GET------------
//mostra l'elenco degli user
app.get('/users', function(req, res) {
    res.json(users.getUsers());
});


//mostra un user in base all'ID
app.get('/users/:id', function(req, res) {
    var id = parseInt(req.params.id);
    res.json(users.filterUserById(id));
})

//mostra un user in base al nome
app.get('/users/:name', function(req, res) {
    var name = parseInt(req.params.id);
    res.status(200).json(users.filterUserByName(name));
})

//restituisce il numero degli user presenti
app.get('/users/count', function(req, res){
    res.json(users.count());
})

//resetta l'elenco degli user
app.get('/users/reset', function(req, res) {
    res.status(200).json(users.reset());
})

//------------POST------------
//inserisco un nuovo user
app.post('/users', function(req, res) {
    
    var i = req.body.name;
    var j = req.body.surname;

    console.log("req.body.name: ", i);
    console.log("req.body.surname: ", j);

    users.addUser(i, j);
    
    res.status(201).json({message: 'User inserito!'});
})