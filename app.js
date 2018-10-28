var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var product = require('./routes/product.route');
var app = express();

var port = 8080;
var mongodb = 'mongodb://localhost:27017/Products';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect(mongodb, function(error){
    console.log(error);
});
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

app.use('/products', product);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});