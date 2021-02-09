import { Router } from 'express';
import User from '../models/user.model';

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

usersRouter.post('/add',(req, res) => {
  const username = req.body.username;

  const newUser = new User({username});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
})

export default usersRouter;