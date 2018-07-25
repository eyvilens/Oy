'use strict';

var mongoose = require('mongoose'); 
var User = mongoose.model('Users');

exports.create_a_user = function(req, res) {
  var new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err){
	  res.send(err);	
	}
    res.json(user);
  });
};

exports.read_a_user = function(req, res) {
  User.findOne({username: req.params.username}, function(err, user) {
    if (err){
	  res.send(err);	
	}
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  User.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err){
	  res.send(err);	
	}
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {
	User.remove(
		{username: req.params.username},
		function(err, user) {
			if (err){
			res.send(err);	
			}
			res.json({ message: 'User successfully deleted' });
		});
};