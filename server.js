/** @format */

const express = require('express');
const app = express();
const port = process.env.port || 7000;
const conn = require('./src/db/conn');
const userRoutes = require('./src/routes/userRoutes');

app.use(express.json());
// app.get('/', (req, res) => {
// 	res.status(201).json({ message: 'hello' });
// });

// app.post('/', (req, res) => {
// 	try {
// 		const newUser = {
// 			id: req.body.id,
// 			name: req.body.name,
// 		};
// 		res.json(newUser);
// 	} catch (error) {}
// });

app.use('/api', userRoutes);

app.listen(port, () => {
	console.log(`app is running on ${port}`);
});
