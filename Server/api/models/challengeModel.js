'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChallengeSchema = new Schema({
  name: {
    type: String,
    required: true,
	default: 'Unnamed Challenge'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  status:{
      type: String,
      enum: ['pending', 'ongoing', 'completed'],
	  default: 'pending'
  },
  users: [{
		username:{
			type: String,
			ref: "Users",
		},
		color:{
			type: String,
			required: true,
		},
		score:{
			type: Number,
			required: true,
			default: 0
		}
	}]
},
{collection: 'Challenges'});

module.exports = mongoose.model('Challenges', ChallengeSchema);