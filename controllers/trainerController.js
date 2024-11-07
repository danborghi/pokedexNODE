const pokemonModel = require('../models/pokemonModel');
const trainerModel = require('../models/trainerModel');

const getAllTrainers = (req, res) => {
    const trainers = trainerModel.getTrainers();
    const pokemons = pokemonModel.getPokemons(); // Obter lista de todos os Pokémons
    res.render('trainers', { trainers, pokemons });
};

const getTrainerForm = (req, res) => {
    const pokemons = pokemonModel.getPokemons();
    res.render('newTrainer', { pokemons });
};

const createTrainer = (req, res) => {
    const { nome } = req.body;
    let pokemons = req.body.pokemons;

    if (!Array.isArray(pokemons)) {
        pokemons = [pokemons];
    }

    trainerModel.createTrainer(nome, pokemons);
    res.redirect('/trainers');
};

module.exports = { getAllTrainers, getTrainerForm, createTrainer };
