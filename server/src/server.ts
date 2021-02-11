import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import pokemonSpeciesRouter from './routes/pokemon-species';
import usersRouter from './routes/users';
import pokemonTypesRouter from './routes/pokemon-types';

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(<any>uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established");
});

//app.use('/users', usersRouter);
app.use('/pokemon-species', pokemonSpeciesRouter);
app.use('/pokemon-types', pokemonTypesRouter);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
