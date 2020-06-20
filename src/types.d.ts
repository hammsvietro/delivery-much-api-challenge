export interface IRecipe {
  title: string;
  ingredients: string[];
  href: string;
}

export interface IApiResponse {
  results: IRecipe[];
}

export interface IGiphyAPIParams {
  q: string;
  limit?: number;
}

export interface IApiError {
  error: string;
}
