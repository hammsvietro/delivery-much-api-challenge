export interface IRecipe {
  title: string;
  ingredients: string[];
  link: string;
  gifLink: string;
}

export interface IApiResponse {
  recipes: IRecipe[];
}
