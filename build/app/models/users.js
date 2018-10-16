(function(){'use strict';
	const mongoose = require('mongoose');
	const schema = mongoose.Schema;

	const UserSchema = new schema({
		

		username: { 
			type: String,
			required: true
		},

		password: {
			type: String,
			required: true
		},

		token: {
			type: String,
		}
	});

	let Users = mongoose.model('users', UserSchema);

	module.exports = Users;
}())