import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();



const api = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs/`
});

async function getRecipeGifLink(recipeName: string): Promise<string> {
  
  const query = `search?api_key=${process.env.GIPHY_API_KEY}&q=${recipeName}&limit=1`;

  let response;
  try {
    response = await api.get(query);
  } catch (error) {
    return 'Giphy api not available :(';
    
  }

  if(response.data.data.length === 0) {
    return 'No available GIF of the recipe :(';
  }

  return response.data.data[0].url;
}

export default getRecipeGifLink;
