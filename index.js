const express = require('express');
const bodyParser = require('body-parser')
const app = express();

//body parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/customer', require('./api/customer'))




app.listen(5000, () => console.log('Server run on port 5000')); 
