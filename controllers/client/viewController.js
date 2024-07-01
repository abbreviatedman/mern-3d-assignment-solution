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

module.exports = {
    getIndexPage,
    getAllMonsPage,
}