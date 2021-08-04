import express from 'express';
import User from '../models/user.js';

const router = express.Router();

// create new user
router.post('/users', (req, res) => {
	const user = req.body;

	User.create(user, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(201).send(data);
		}
	});
});

// get all users
router.get('/users', (req, res) => {
	User.find((err, data) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(200).send(data);
		}
	});
});

// get specific user
router.get('/users/:id', (req, res) => {
	User.findById(req.params.id, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(200).send(data);
		}
	});
});

// update specific user
router.put('/users/:id', (req, res) => {
	User.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, data) => {
			if (err) {
				res.sendStatus(500);
			} else {
				res.status(200).send(data);
			}
		}
	);
});

export default router;
