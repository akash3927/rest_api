/** @format */

const express = require('express');
const app = express();

const port = process.env.port || 7000;
app.listen(port, () => {
	console.log(`app is running on ${port}`);
});
