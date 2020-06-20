import axios from 'axios';

import { IApiResponse, IApiError } from '../types';

const api = axios.create({
  baseURL: 'http://www.recipepuppy.com/api/?i='
});

async function getRecipes(ingredients: string): Promise<IApiResponse | IApiError > {

  let response: IApiResponse;

  try {
  
    response = await api.get(ingredients);

  } catch (error) {
    
    return {
      error: 'api is not working at the moment, try again later'
    };
  
  }

  if(response.results.length === 0) return {
    error: 'no recipe has been found with these ingredients'
  };

  return response;
}

export default getRecipes;
