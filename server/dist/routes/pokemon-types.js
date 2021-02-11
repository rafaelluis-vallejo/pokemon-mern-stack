"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_types_model_1 = __importDefault(require("../models/pokemon-types.model"));
const pokemonTypesRouter = express_1.Router();
pokemonTypesRouter.get('/', (req, res) => {
    pokemon_types_model_1.default.find()
        .then((types) => res.json(types))
        .catch((err) => res.status(400).json('Error: ' + err));
});
pokemonTypesRouter.post('/add', (req, res) => {
    const pokemonType = req.body.pokemonType;
    const newPokemonTypes = new pokemon_types_model_1.default({
        pokemonType
    });
    newPokemonTypes.save()
        .then(() => res.json('Type added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});
pokemonTypesRouter.get('/:id', (req, res) => {
    pokemon_types_model_1.default.findById(req.params.id)
        .then(types => res.json(types))
        .catch(err => res.status(400).json('Error: ' + err));
});
pokemonTypesRouter.delete('/:id', (req, res) => {
    pokemon_types_model_1.default.findByIdAndDelete(req.params.id)
        .then(() => res.json('Pokemon type deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
pokemonTypesRouter.post('/update/:id', (req, res) => {
    pokemon_types_model_1.default.findById(req.params.id)
        .then((types) => {
        types.pokemonType = req.body.pokemonType;
        types.save()
            .then(() => res.json('Pokemon updated!'))
            .catch((err) => res.status(400).json('Error: ' + err));
    })
        .catch(err => res.status(400).json('Error: ' + err));
});
exports.default = pokemonTypesRouter;
