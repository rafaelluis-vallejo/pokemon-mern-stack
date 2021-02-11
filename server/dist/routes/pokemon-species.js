"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_species_model_1 = __importDefault(require("../models/pokemon-species.model"));
const pokemonSpeciesRouter = express_1.Router();
pokemonSpeciesRouter.get('/', (req, res) => {
    pokemon_species_model_1.default.find()
        .then((species) => res.json(species))
        .catch((err) => res.status(400).json('Error: ' + err));
});
pokemonSpeciesRouter.post('/add', (req, res) => {
    const username = req.body.username;
    const nextEvolution = req.body.nextEvolution;
    const level = req.body.level;
    const pokemonType = req.body.pokemonType;
    const newPokemonSpecies = new pokemon_species_model_1.default({
        username,
        nextEvolution,
        level,
        pokemonType
    });
    newPokemonSpecies.save()
        .then(() => res.json('Pokemon added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});
pokemonSpeciesRouter.get('/:id', (req, res) => {
    pokemon_species_model_1.default.findById(req.params.id)
        .then(species => res.json(species))
        .catch(err => res.status(400).json('Error: ' + err));
});
pokemonSpeciesRouter.delete('/:id', (req, res) => {
    pokemon_species_model_1.default.findByIdAndDelete(req.params.id)
        .then(() => res.json('Pokemon deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
pokemonSpeciesRouter.post('/update/:id', (req, res) => {
    pokemon_species_model_1.default.findById(req.params.id)
        .then((species) => {
        species.username = req.body.username;
        species.nextEvolution = req.body.nextEvolution;
        species.level = req.body.level;
        species.pokemonType = req.body.pokemonType;
        species.save()
            .then(() => res.json('Pokemon updated!'))
            .catch((err) => res.status(400).json('Error: ' + err));
    })
        .catch(err => res.status(400).json('Error: ' + err));
});
exports.default = pokemonSpeciesRouter;
