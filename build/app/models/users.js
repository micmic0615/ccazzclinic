(function(){'use strict';
	const mongoose = require('mongoose');
	const schema = mongoose.Schema;

	const UserSchema = new schema({
		first_name: { 
			type: String,
			required: true
		},

		last_name: { 
			type: String,
			required: true
		},

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