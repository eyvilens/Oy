'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	username: {
		type: String,
		required: true
	},
	challenges: {
		type: [Schema.Types.ObjectId],
		//ref: "Challenges",
		default: []
	}
},
{collection: 'Users'});

module.exports = mongoose.model('Users', UserSchema);
