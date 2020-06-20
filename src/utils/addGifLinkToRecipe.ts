import getRecipeLink from '../services/GiphyAPI';

import { IRecipe } from '../types';


async function addGifLinkToRecipe(recipe: IRecipe): Promise<IRecipe> {
  
  recipe.gif = await getRecipeLink(recipe.title); 

  return recipe;
}

export default addGifLinkToRecipe;
