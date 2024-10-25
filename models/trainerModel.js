const trainers = [];

const getTrainers = () => trainers;

const createTrainer = (nome, pokemons) => {
    const newTrainer = {
        id: trainers.length + 1,
        nome,
        pokemons: pokemons.map(pokemonId => parseInt(pokemonId)) // Armazena IDs dos Pokémons
    };
    trainers.push(newTrainer);
    return newTrainer;
};

const getTrainerById = (id) => trainers.find(t => t.id === parseInt(id));

module.exports = { getTrainers, createTrainer, getTrainerById };
