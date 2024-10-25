const pokemonModel = require('../models/pokemonModel');
const trainerModel = require('../models/trainerModel');

const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    res.render('trainers', { trainers });
};

const getTrainerForm = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('newTrainer', { pokemons });
};

const createTrainer = (req, res) => {
    const { nome, pokemons } = req.body;
    trainerModel.createTrainer(nome, pokemons);
    res.redirect('/trainers');
};

module.exports = { getAllTrainers, getTrainerForm, createTrainer };
