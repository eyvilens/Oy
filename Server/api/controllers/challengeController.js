'use strict';

var mongoose = require('mongoose'); 
var Challenge = mongoose.model('Challenges');
var User = mongoose.model('Users');

exports.list_all_challenges = function(req, res) {
	Challenge.find({}, function(err, challenge) {
    if (err){
		res.send(err);
	}
    res.json(challenge);
  });
};


exports.create_a_challenge = function(req, res) {
  var new_challenge = new Challenge(req.body);
  new_challenge.save(function(err, challenge) {
    if (err){
	  res.send(err);	
	}
    res.json(challenge);
  });
};


exports.read_a_challenge = function(req, res) {
  Challenge.findById(req.params.challengeId, function(err, challenge) {
    if (err){
	  res.send(err);	
	}
    res.json(challenge);
  });
};


exports.update_a_challenge = function(req, res) {
  Challenge.findOneAndUpdate({_id: req.params.challengeId}, req.body, {new: true}, function(err, challenge) {
    if (err){
	  res.send(err);	
	}
    res.json(challenge);
  });
};


exports.delete_a_challenge = function(req, res) {
	Challenge.remove(
		{_id: req.params.challengeId},
		function(err, challenge) {
			if (err){
			res.send(err);	
			}
			res.json({ message: 'Challenge successfully deleted' });
		});
};

exports.add_user = function(req, res) {
	User.findOne({username:req.params.username}, function(err, user){
			user.challenges.push(req.params.challengeId);
			User.findOneAndUpdate({username: req.params.username}, user, function(err, user2) {
				if (err){
					res.send(err);	
				}
				res.json(user2);
			});
			Challenge.findById(req.params.challengeId, function(err, challenge) {
				challenge.users.push({username: user.username, color:'blue'});
				Challenge.findOneAndUpdate({_id: req.params.challengeId}, challenge, function(err, challenge2) {
					if (err){
						res.send(err);	
					}
				})
			});
		}
	);
};

exports.inc_user_score = function(req, res) {
};

exports.remove_user = function(req, res) {
};




