const express = require('express');
const router = express.Router();
const trainerController = require('../controllers/trainerController');

router.get('/trainers', trainerController.getAllTrainers);

router.get('/trainers/new', trainerController.getTrainerForm);

router.post('/trainers', trainerController.createTrainer);

module.exports = router;
