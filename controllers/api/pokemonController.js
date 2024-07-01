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
    const name = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase();
    try {
        const pokemon = await Pokemon.findOne({ Name: name })
        if (!pokemon) {
            res.status(404).json({message: 'failure', payload: 'No pokemon with that name found.'})
            
            return;
        }

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

const createOnePokemon = async (req, res) => {
    const pokemon = req.body;
    console.log(pokemon);
    try {
        const created = await Pokemon.create(pokemon)
        res.status(201).json({message: 'success', payload: created})
    } catch (error) {
        const packet = {
            message: 'failure in createOnePokemon',
            payload: error
        };

        console.log(packet);
        res.status(500).json(packet)
    }

}

module.exports = {
    getAllPokemon,
    getOnePokemon,
    createOnePokemon,
}