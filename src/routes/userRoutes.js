/** @format */

const express = require('express');
const { newUser, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();
const user = require('../models/userschema');

router.get('/', (req, res) => {
	res.json({ message: 'hello' });
});

router.post('/newuser', newUser);

router.patch('/updatedUser/:id', updateUser);

router.delete('/deleteUser/:id', deleteUser);

module.exports = router;
