const express = require('express');

const { getAllPokemon } = require('../../controllers/api/pokemonController')

const router = express.Router();

// http://localhost:3000/api/pokemon
router.get('/', getAllPokemon)

module.exports = router;