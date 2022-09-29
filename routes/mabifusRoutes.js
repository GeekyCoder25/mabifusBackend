const express = require('express');

const Test = require('../models/tests');
const User = require('../models/users');
const router = express.Router();

router.post('/new-user', (req, res) => {
	User.create(req.body)
		.then(result => res.status(200).json(result))
		.catch(err => console.log(err));
});
router.get('/users', (req, res) => {
	User.find()
		.then(result => res.status(200).json(result))
		.catch(err => console.log(err));
});
router.delete('/users', (req, res) => {
	User.deleteMany()
		.then(result => res.status(200).json(result))
		.catch(err => console.log(err));
});
router.get('/user/:id', (req, res) => {
	User.findById(req.params.id)
		.then(result => res.status(200).json(result))
		.catch(err => console.log(err));
});
router.put('/user/:id', (req, res) => {
	User.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		runValidators: true,
	})
		.then(result => res.status(200).json(result))
		.catch(err => console.log(err));
});
router.get('/tests', (req, res) => {
	Test.find()
		.then(result => res.status(200).json(result))
		.catch(err => console.log(err));
});

module.exports = router;
