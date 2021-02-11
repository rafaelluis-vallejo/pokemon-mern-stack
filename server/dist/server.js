"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const pokemon_species_1 = __importDefault(require("./routes/pokemon-species"));
const pokemon_types_1 = __importDefault(require("./routes/pokemon-types"));
require("dotenv").config();
const app = express_1.default();
const port = process.env.PORT || 5000;
app.use(cors_1.default());
app.use(express_1.default.json());
const uri = process.env.ATLAS_URI;
mongoose_1.default.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose_1.default.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established");
});
//app.use('/users', usersRouter);
app.use('/pokemon-species', pokemon_species_1.default);
app.use('/pokemon-types', pokemon_types_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
