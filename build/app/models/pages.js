(function(){'use strict';
	const mongoose = require('mongoose');
	const schema = mongoose.Schema;

	const PageSchema = new schema({
		

		page_id: { 
			type: String,
			required: true
		},

		content: Object,

	});

	let Pages = mongoose.model('pages', PageSchema);

	module.exports = Pages;
}())