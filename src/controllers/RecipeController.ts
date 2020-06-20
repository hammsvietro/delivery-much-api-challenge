import { Request, Response } from 'express';

import getRecipes from '../services/PuppyAPI';
import addGifLinkToRecipe from '../utils/addGifLinkToRecipe';

import { IRecipe } from '../types';

class RecipeController {
  async index(req: Request, res: Response) {

    const i = req.query.i as string;

    const ingredients = i.split(',');

    const recipes: IRecipe[] = await getRecipes(i);

    for (const recipe of recipes) {
      await addGifLinkToRecipe(recipe);
    }

    return res.status(200).send({
      ingredients,
      recipes
    });
  }

}

export default new RecipeController();
