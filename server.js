const express = require('express')
let app = express();
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(express.json())



app.use('/',api = express.Router())
require('./route/api')(api)



app.listen(8000,()=>{
    console.log("connection 8000")
});

