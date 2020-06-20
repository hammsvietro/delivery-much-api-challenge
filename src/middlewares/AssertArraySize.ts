import { Request, Response, NextFunction } from 'express';

function assertArraySize(req: Request, res: Response, next: NextFunction) {
  
  const i = req.query.i as string;

  if(!i || i.length === 0) return res.status(400).send({ error: 'at least one ingredient must be specified' });

  if(i.split(',').length > 3) return res.status(400).send({ error: 'max of three ingredients in the query params' });

  return next();

}

export default assertArraySize;
