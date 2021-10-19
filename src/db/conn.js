/** @format */

const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/restapi', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('---------connected------------');
	})
	.catch((e) => {
		console.error(e);
	});
