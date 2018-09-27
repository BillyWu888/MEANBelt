var express = require('express');
var mongoose = require('mongoose');
var app = express();
var path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.static( __dirname + '/MEANBelt/dist/meanbelt' ));

mongoose.connect('mongodb://localhost/MEANBelt');

require('./server/config/routes.js')(app)

mongoose.Promise = global.Promise;

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./MEANBelt/dist/meanbelt/index.html"))
  });

app.listen(8000, function() {
    console.log("listening on port 8000");
});