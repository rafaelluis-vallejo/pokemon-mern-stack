"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const pokemonSpeciesSchema = new Schema({
    username: { type: String, required: true },
    nextEvolution: { type: String, required: true },
    level: { type: Number, required: true },
    pokemonType: { type: String, required: true },
}, {
    timestamps: true,
});
const pokemonSpecies = mongoose_1.default.model("pokemonSpecies", pokemonSpeciesSchema);
exports.default = pokemonSpecies;
