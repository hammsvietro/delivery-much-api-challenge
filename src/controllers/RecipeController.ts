import { Request, Response } from 'express';

import getRecipes from '../services/PuppyAPI';
import addGifLinkToRecipes from '../utils/AddGifLinkToRecipes';
import trimTitleString from '../utils/TrimTitleString';


class RecipeController {
  async index(req: Request, res: Response) {

    const i = req.query.i as string;

    const ingredients = i.split(',');

    const recipes = await getRecipes(i);

    if(recipes.error) {
      const errorCode = recipes.error.includes('api is not working') ? 502 : 404;
      
      return res.status(errorCode).send({ error: recipes.error });
    } 
      

    trimTitleString(recipes);

    await addGifLinkToRecipes(recipes);
    
    return res.status(200).send({
      ingredients,
      recipes
    });
  }

}

export default new RecipeController();
