import axios from 'axios';


import { IApiResponse } from '../types';

const api = axios.create({
  baseURL: 'http://www.recipepuppy.com/api'
});

async function getRecipes(ingredients: string): Promise<any> {

  let response: IApiResponse;

  try {
    response = await api.get(`?i=${ingredients}`);
    
  } catch (error) {
    return {
      error: 'api is not working at the moment, try again later'
    };
  
  }

  if(response.data.results.length === 0) return {
    error: 'no recipe has been found with these ingredients'
  };

  const recipes = response.data.results.map((recipe) => {
    return {
      title: recipe.title,
      href: recipe.href,
      igredients: recipe.ingredients,
    };
  });
  
  return recipes;
}

export default getRecipes;
