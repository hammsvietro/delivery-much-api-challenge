import getRecipeLink from '../services/GiphyAPI';

import { IRecipe } from '../types';


async function addGifLinkToRecipe(recipes: IRecipe[]): Promise<IRecipe[]> {
  
  for (const recipe of recipes) {
    recipe.gif = await getRecipeLink(recipe.title);
  }
  

  return recipes;
}

export default addGifLinkToRecipe;
