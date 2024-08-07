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
    const pokemon = {
        Name: req.body.Name,
        Type: req.body.Type,
        PokedexNo: req.body.PokedexNo,
        Moves: req.body.Moves.split(', ')
    }

    try {
        const created = await Pokemon.create(pokemon)
        res.redirect(`/oneMon/${created.Name}`)
    } catch (error) {
        const packet = {
            message: 'failure in createOnePokemon',
            payload: error
        };

        console.log(packet);
        res.status(500).json(packet)
    }

}

const deleteOnePokemon = async (req, res) => {
    try {
        const name = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase();
        await Pokemon.deleteOne({ Name: name })
        res.redirect('/allMons')
    } catch (error) {
        const packet = {
            message: 'failure in deleteOnePokemon',
            payload: error,
        }
        
        console.log(packet);
        res.status(500).json(packet);
    }
}

const updateOnePokemon = async (req, res) => {
    const name = req.params.name // the pokemon they want to update, e.g. 'Bulbasaur'
    const updateData = req.body // the pokemon data they want to update with, e.g. {Name: 'Colinsaur', PokedexNo: -5, Type: 'goof', Moves: ['Goof around', 'Sleep in on weekends']}
    const cleanedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    const pokemon = await Pokemon.findOne({Name: cleanedName})
    pokemon.Name = updateData.Name;
    pokemon.Type = updateData.Type;
    pokemon.Moves = updateData.Moves.split(', ')
    pokemon.PokedexNo = updateData.PokedexNo;
    // or, fancier and shorter:
    // Object.assign(pokemon, updateData)
    await pokemon.save();
    res.redirect(`/oneMon/${pokemon.Name}`);
}

module.exports = {
    getAllPokemon,
    getOnePokemon,
    createOnePokemon,
    deleteOnePokemon,
    updateOnePokemon,
}