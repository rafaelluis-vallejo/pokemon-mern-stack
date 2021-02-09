"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exercise_model_1 = __importDefault(require("../models/exercise.model"));
const exercisesRouter = express_1.Router();
exercisesRouter.get('/', (req, res) => {
    exercise_model_1.default.find()
        .then((exercises) => res.json(exercises))
        .catch((err) => res.status(400).json('Error: ' + err));
});
exercisesRouter.post('/add', (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = req.body.duration;
    const date = req.body.date;
    const newExercise = new exercise_model_1.default({
        username,
        description,
        duration,
        date
    });
    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch((err) => res.status(400).json('Error: ' + err));
});
exercisesRouter.get('/:id', (req, res) => {
    exercise_model_1.default.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});
exercisesRouter.delete('/:id', (req, res) => {
    exercise_model_1.default.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});
exercisesRouter.post('/update/:id', (req, res) => {
    exercise_model_1.default.findById(req.params.id)
        .then((exercise) => {
        exercise.username = req.body.username;
        exercise.description = req.body.description;
        exercise.duration = req.body.duration;
        exercise.date = req.body.date;
        exercise.save()
            .then(() => res.json('Exercise updated!'))
            .catch((err) => res.status(400).json('Error: ' + err));
    })
        .catch(err => res.status(400).json('Error: ' + err));
});
exports.default = exercisesRouter;
