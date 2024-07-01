const express = require('express');

const {
    getAllPokemon,
    getOnePokemon,
    } = require('../../controllers/api/pokemonController')

const router = express.Router();

// http://localhost:3000/api/pokemon
router.get('/', getAllPokemon)
// http://localhost:3000/api/pokemon/:name
router.get('/:name', getOnePokemon)

module.exports = router;