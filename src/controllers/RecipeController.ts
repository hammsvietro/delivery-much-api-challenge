import { Request, Response } from 'express';


class RecipeController {
  async index(req: Request, res: Response) {
    return res.status(200).send({ a: 'a' });
  }

}

export default new RecipeController();
