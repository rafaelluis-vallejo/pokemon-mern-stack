import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pokemonSpeciesSchema = new Schema(
  {
    username: { type: String, required: true },
    nextEvolution: { type: String, required: true },
    level: { type: Number, required: true },
    pokemonType: { type: String, required: true },
  },{
    timestamps: true,
  }
);

const pokemonSpecies = mongoose.model("pokemonSpecies", pokemonSpeciesSchema);

export default pokemonSpecies;
