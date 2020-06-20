import { Router } from 'express';

import recipeController from './controllers/RecipeController';

const routes = Router();

routes.get('/', (req, res) => res.json({ hey: 'hey' }));

routes.get('/recipes/', recipeController.index);

routes.get('/recipes/', recipeController.index);

export default routes;
