/** @format */

const user = require('../models/userschema');

exports.newUser = async (req, res) => {
	try {
		const newUser = new user(req.body);
		const showUser = await newUser.save();
		res.status(200).json(showUser);
	} catch (error) {
		console.error(error);
	}
};

exports.updateUser = async (req, res) => {
	try {
		const id = req.params.id;
		const getUser = await user.findOneAndUpdate(id, req.body);
		res.send(getUser);
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.deleteUser = async (req, res) => {
	try {
		// const id = req.params.id
		const deleteUser = await user.findOneAndDelete(req.params.id);
		res.send(deleteUser);
	} catch (error) {
		res.send(e);
	}
};
