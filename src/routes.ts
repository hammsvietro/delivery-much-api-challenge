import { Router } from 'express';

import recipeController from './controllers/RecipeController';

import assertArraySize from './middlewares/AssertArraySize';

const routes = Router();

routes.get('/recipes/', assertArraySize, recipeController.index);

export default routes;
