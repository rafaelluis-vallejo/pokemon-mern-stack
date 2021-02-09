import { Router } from 'express';
import Exercise from '../models/exercise.model';

const exercisesRouter = Router();

exercisesRouter.get('/', (req, res) => {
  Exercise.find()
    .then((exercises) => res.json(exercises))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

exercisesRouter.post('/add',(req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = req.body.duration as Number;
  const date = req.body.date as Date;

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date
  });

  newExercise.save()
    .then(() => res.json('Exercise added!'))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

exercisesRouter.get('/:id',(req, res) => {
  Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(err => res.status(400).json('Error: ' + err));
});

exercisesRouter.delete('/:id', (req, res) => {
  Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json('Exercise deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

exercisesRouter.post('/update/:id', (req, res) => {
  Exercise.findById(req.params.id)
    .then((exercise: any) => {
      exercise.username = req.body.username;
      exercise.description = req.body.description;
      exercise.duration = req.body.duration as Number;
      exercise.date = req.body.date as Date;

      exercise.save()
        .then(() => res.json('Exercise updated!'))
        .catch((err: Error) => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default exercisesRouter;