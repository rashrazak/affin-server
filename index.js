const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/customer', require('./api/customer'))




app.listen(5000, () => console.log('Server run on port 5000')); 
