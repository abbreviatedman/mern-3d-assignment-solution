const Pokemon = require('../../models/pokemonModel')

const getAllPokemon = async (_, res) => {
    try {
        const pokemon = await Pokemon.find({})
        res.status(200).json(pokemon)
    } catch (error) {
        const packet = {
            message: 'failure in geAllPokemon',
            payload: error,
        }

        console.log(packet);
        res.status(500).json(packet);
    }
}

module.exports = {
    getAllPokemon,
}