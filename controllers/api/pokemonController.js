const Pokemon = require('../../models/pokemonModel')

const getAllPokemon = async (_, res) => {
    try {
        const pokemon = await Pokemon.find({})
        res.status(200).json({ message: 'success', payload: pokemon })
    } catch (error) {
        const packet = {
            message: 'failure in geAllPokemon',
            payload: error,
        }

        console.log(packet);
        res.status(500).json(packet);
    }
}

const getOnePokemon = async (req, res) => {
    const name = req.params.name
    try {
        const pokemon = await Pokemon.findOne({ Name: name })
        res.status(200).json({ message: 'success', payload: pokemon })
    } catch (error) {
        const packet = {
            message: 'failure in getOnePokemon',
            payload: error
        };

        console.log(packet);
        res.status(500).json(packet);
    }
}

module.exports = {
    getAllPokemon,
    getOnePokemon,
}