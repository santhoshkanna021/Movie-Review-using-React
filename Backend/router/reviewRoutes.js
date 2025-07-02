const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
  const reviews = await Review.find();
  res.json(reviews);
});

// Add a review
router.post('/', async (req, res) => {
  const review = new Review(req.body);
  await review.save();
  res.status(201).json(review);
});

// Delete a review
router.delete('/:id', async (req, res) => {
  await Review.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;