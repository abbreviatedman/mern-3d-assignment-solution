const Pokemon = require('../../models/pokemonModel')

const getIndexPage = (_, res) => {
    res.render('index')
}

const getAllMonsPage = async (_, res) => {
    try {
        const pokemons = await Pokemon.find({});
        res.status(200).render('allMons', { pokemons })
    } catch (error) {
        const packet = {
            message: 'failure in getAllMonsPage',
            payload: error,
        };

        console.log(packet);
        res.status(500).json(packet)
    }
}

const getOneMonsPage = async (req, res) => {
    const name = req.params.name[0].toUpperCase() + req.params.name.slice(1).toLowerCase();
    try {
        const pokemon = await Pokemon.findOne({ Name: name })
        if (!pokemon) {
            // TODO: create and render here a 404 page
            // res.status(404).json({message: 'failure', payload: 'No pokemon with that name found.'})
            
            // return;
        }

        res.render('oneMon', {pokemon: pokemon})
    } catch (error) {
        const packet = {
            message: 'failure in getOnePokemon',
            payload: error
        };

        console.log(packet);
        res.status(500).json(packet);
    }
}

const getCreateMonsPage = (_, res) => {
    res.render('createMon');
}

module.exports = {
    getIndexPage,
    getAllMonsPage,
    getOneMonsPage,
    getCreateMonsPage,
}