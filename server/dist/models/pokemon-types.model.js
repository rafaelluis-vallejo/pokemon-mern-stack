"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const pokemonTypeSchema = new Schema({
    pokemonType: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
    },
}, {
    timestamps: true,
});
const pokemonTypes = mongoose_1.default.model("pokemonTypes", pokemonTypeSchema);
exports.default = pokemonTypes;
