var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Callenge = require('./api/models/challengeModel'), //created model loading here
  User = require('./api/models/userModel'),
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/local'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var challengeRoutes = require('./api/routes/challengeRoutes'); //importing route
challengeRoutes(app); //register the route

var userRoutes = require('./api/routes/userRoutes'); //importing route
userRoutes(app); //register the route


app.listen(port);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

console.log('challenge list RESTful API server started on: ' + port);
