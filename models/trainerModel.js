const trainers = [];

const getTrainers = () => trainers;

const createTrainer = (nome, pokemons) => {
    const newTrainer = {
        id: trainers.length + 1,
        nome,
        pokemons // Armazena os IDs diretamente, sem transformar
    };
    trainers.push(newTrainer);
    return newTrainer;
};

const getTrainerById = (id) => trainers.find(t => t.id === parseInt(id));

module.exports = { getTrainers, createTrainer, getTrainerById };
