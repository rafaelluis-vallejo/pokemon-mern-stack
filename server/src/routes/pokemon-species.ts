import { Router } from 'express';
import pokemonSpecies from '../models/pokemon-species.model';

const pokemonSpeciesRouter = Router();

pokemonSpeciesRouter.get('/', (req, res) => {
  pokemonSpecies.find()
    .then((species) => res.json(species))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

pokemonSpeciesRouter.post('/add',(req, res) => {
  const username = req.body.username;
  const nextEvolution = req.body.nextEvolution;
  const level = req.body.level as Number;
  const pokemonType = req.body.pokemonType;

  const newPokemonSpecies = new pokemonSpecies({
    username,
    nextEvolution,
    level,
    pokemonType
  })

  newPokemonSpecies.save()
    .then(() => res.json('Pokemon added!'))
    .catch((err: Error) => res.status(400).json('Error: ' + err));
});

pokemonSpeciesRouter.get('/:id',(req, res) => {
  pokemonSpecies.findById(req.params.id)
    .then(species => res.json(species))
    .catch(err => res.status(400).json('Error: ' + err));
});

pokemonSpeciesRouter.delete('/:id', (req, res) => {
  pokemonSpecies.findByIdAndDelete(req.params.id)
    .then(() => res.json('Pokemon deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

pokemonSpeciesRouter.post('/update/:id', (req, res) => {
  pokemonSpecies.findById(req.params.id)
    .then((species: any) => {
      species.username = req.body.username;
      species.nextEvolution = req.body.nextEvolution;
      species.level = req.body.level as Number;
      species.pokemonType = req.body.pokemonType;

      species.save()
        .then(() => res.json('Pokemon updated!'))
        .catch((err: Error) => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

export default pokemonSpeciesRouter;