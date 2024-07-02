const Pokemon = require('../../models/pokemonModel');
const Trainer = require('../../models/trainerModel');

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
        const trainers = await Trainer.find({});
        const pokemon = await Pokemon.findOne({ Name: name })
        if (!pokemon) {
            // TODO: create and render here a 404 page
            // res.status(404).json({message: 'failure', payload: 'No pokemon with that name found.'})
            
            // return;
        }

        res.render('oneMon', {pokemon: pokemon, trainers: trainers})
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

const getUpdateMonsPage = async (req, res) => {
    const name = req.params.name;
    const cleanedName = name[0].toUpperCase() + name.slice(1).toLowerCase();
    const pokemon = await Pokemon.findOne({ Name: cleanedName });
    res.render('updateMon', {pokemon: pokemon})
}

const getAllTrainersPage = async (_, res) => {
    const trainers = await Trainer.find({});
    res.render('allTrainers', {trainers: trainers});
}

const getOneTrainersPage = async (req, res) => {
    const trainer = await Trainer.findById(req.params.id);
    // find all pokemon whose id is in the trainer.Pokemons array
    const pokemons = await Pokemon.find({_id: {$in: trainer.Pokemons}})
    res.render('oneTrainer', {trainer: trainer, pokemons: pokemons})
}

const getOneRegionPage = async (req, res) => {
    const region = req.params.region;
    const trainers = await Trainer.find({Region: region})
    res.render('oneRegion', {region: region, trainers: trainers})
}


module.exports = {
    getIndexPage,
    getAllMonsPage,
    getOneMonsPage,
    getCreateMonsPage,
    getUpdateMonsPage,
    getAllTrainersPage,
    getOneTrainersPage,
    getOneRegionPage,
}