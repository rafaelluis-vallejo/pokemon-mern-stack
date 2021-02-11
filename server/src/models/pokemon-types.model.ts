import mongoose from "mongoose";

const Schema = mongoose.Schema;

const pokemonTypeSchema = new Schema(
  {
    pokemonType: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      minlength: 3,
    },
  },
  {
    timestamps: true,
  }
);

const pokemonTypes = mongoose.model("pokemonTypes", pokemonTypeSchema);

export default pokemonTypes;
