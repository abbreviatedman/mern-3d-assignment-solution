const Trainer = require('../../models/trainerModel');

const catchAPokemon = async (req, res) => {
    // find the trainer
    const trainer = await Trainer.findById(req.body.trainerId);
    // add the pokemon's id to their Pokemons array
    if (!trainer.Pokemons) {
        trainer.Pokemons = [];
    }

    trainer.Pokemons.push(req.params.pokemonId);
    trainer.save();
    // redirect to the trainer's oneTrainer page
    res.redirect(`/oneTrainer/${trainer._id}`);
}

module.exports = {catchAPokemon}