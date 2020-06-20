import axios from 'axios';
import dotenv from 'dotenv';

import { IGiphyAPIParams } from '../types';

dotenv.config();



const api = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/search?api_key=${process.env.GIPHY_API_KEY}&q=`  
});

async function getRecipeGifLink(recipeName: string): Promise<string> {
  
  // by default the limit will be set to one to minimize response time
  const query = `${recipeName}&limit=1`;

  let response;
  try {
    response = await api.get(query);
  } catch (error) {
    return 'api not available or no GIF corresponding to the recipe was found :(';
  }
  return response.data[0].url;
}

export default getRecipeGifLink;
