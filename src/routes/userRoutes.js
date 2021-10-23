/** @format */

const express = require('express');
const router = express.Router();
const user = require('../models/userschema');

router.get('/', (req, res) => {
	res.json({ message: 'hello' });
});

router.post('/newuser', async (req, res) => {
	try {
		const newUser = new user(req.body);
		const showUser = await newUser.save();
		res.status(200).json(showUser);
	} catch (error) {
		console.error(error);
	}
});

router.patch('/updatedUser/:id', async (req, res) => {
	try {
		const id = req.params.id;
		const getUser = await user.findOneAndUpdate(id, req.body);
		res.send(getUser);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.delete('/deleteUser/:id', async (req, res) => {
	try {
		// const id = req.params.id
		const deleteUser = await user.findOneAndDelete(req.params.id);
		res.send(deleteUser);
	} catch (error) {
		res.send(e);
	}
});

module.exports = router;
