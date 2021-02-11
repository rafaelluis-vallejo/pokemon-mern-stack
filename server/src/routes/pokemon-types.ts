import { Router } from 'express';
import pokemonTypes from '../models/pokemon-types.model';

const pokemonTypesRouter = Router();

pokemonTypesRouter.get('/', (req, res) => {
  pokemonTypes.find()
    .then((types) => res.json(types))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

pokemonTypesRouter.post('/add',(req, res) => {
  const pokemonType = req.body.pokemonType;

  const newPokemonTypes = new pokemonTypes({
    pokemonType
  })

  newPokemonTypes.save()
    .then(() => res.json('Type added!'))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

pokemonTypesRouter.get('/:id',(req, res) => {
  pokemonTypes.findById(req.params.id)
    .then(types => res.json(types))
    .catch(err => res.status(400).json('Error: ' + err));
});

pokemonTypesRouter.delete('/:id', (req, res) => {
  pokemonTypes.findByIdAndDelete(req.params.id)
    .then(() => res.json('Pokemon type deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

pokemonTypesRouter.post('/update/:id', (req, res) => {
  pokemonTypes.findById(req.params.id)
    .then((types: any) => {
      types.pokemonType = req.body.pokemonType;

      types.save()
        .then(() => res.json('Pokemon updated!'))
        .catch((err: Error) => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default pokemonTypesRouter;