import express from 'express';
import ScoreCard from '../models/scorecard.js';

const router = express.Router();

// create new scorecard
router.post('/scorecards', (req, res) => {
	const scorecard = req.body;

	ScoreCard.create(scorecard, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(201).send(data);
		}
	});
});

// get all scorecards
router.get('/scorecards', (req, res) => {
	ScoreCard.find((err, data) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(200).send(data);
		}
	});
});

// get specific scorecard
router.get('/scorecards/:id', (req, res) => {
	ScoreCard.findById(req.params.id, (err, data) => {
		if (err) {
			res.sendStatus(500);
		} else {
			res.status(200).send(data);
		}
	});
});

// update specific scorecard
router.put('/scorecards/:id', (req, res) => {
	ScoreCard.findByIdAndUpdate(
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
