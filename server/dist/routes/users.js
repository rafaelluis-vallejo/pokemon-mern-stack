"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_model_1 = __importDefault(require("../models/user.model"));
const usersRouter = express_1.Router();
usersRouter.get('/', (req, res) => {
    user_model_1.default.find()
        .then((users) => res.json(users))
        .catch((err) => res.status(400).json('Error: ' + err));
});
usersRouter.post('/add', (req, res) => {
    const username = req.body.username;
    const newUser = new user_model_1.default({ username });
    newUser.save()
        .then(() => res.json('User added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});
exports.default = usersRouter;
