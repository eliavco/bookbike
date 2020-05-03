const express = require('express');
const bikeController = require('./../controllers/bikeController');
// const authController = require('./../controllers/authController');

const router = express.Router();

// const { protect, restrict } = authController;
// If login is required, add protect as first middleware

router
	.route('/')
	.get(bikeController.makeQueries, bikeController.getAllBikes)
	.post(bikeController.createBike);

router
	.route('/:id')
	.get(bikeController.getBike)
	.put(bikeController.updateBike)
	.delete(bikeController.deleteBike);

module.exports = router;