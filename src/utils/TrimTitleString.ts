import { IRecipe } from '../types';

function trimTitle(str: string): string {
  str.replace('\\n', '');
  str.replace('\\t', '');
  str.replace('\\r', '');
  str.trim();
  return str;
}

export default function trimTitleString(recipes: IRecipe[]): void {
  for (const recipe of recipes) {
    recipe.title = trimTitle(recipe.title);
  }
}
