const express = require('express');
const router = express.Router();
const pokemonController = require('../controllers/pokemonController');


router.get('/', pokemonController.getAllPokemons);
router.get('/pokemon/:id', pokemonController.getPokemon);
router.get('/new', (req, res) => {
    res.render('newPokemon');
});

router.post('/pokemon', (req, res) => {
    const { nome, tipo } = req.body;
    pokemonController.createPokemon(req, res);
    res.redirect('/');
});


module.exports = router;