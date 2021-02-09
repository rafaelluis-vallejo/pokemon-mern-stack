"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const exercises_1 = __importDefault(require("./routes/exercises"));
const users_1 = __importDefault(require("./routes/users"));
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
app.use('/users', users_1.default);
app.use('/exercises', exercises_1.default);
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
