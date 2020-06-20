export interface IRecipe {
  title: string;
  ingredients: string[];
  href: string;
  gif?: string;
}

export interface IApiResponse {
  data: {
    results: IRecipe[]
  }
}
export interface IApiError {
  error: string;
}
