/** @format */

const express = require('express');
const app = express();
const port = process.env.port || 7000;

app.use(express.json());
app.get('/', (req, res) => {
	res.status(201).json({ message: 'hello' });
});

app.post('/', (req, res) => {
	try {
		const newUser = {
			id: req.body.id,
			name: req.body.name,
		};
		res.json(newUser);
	} catch (error) {}
});

app.listen(port, () => {
	console.log(`app is running on ${port}`);
});
