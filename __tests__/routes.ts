import { Router } from 'express';

import assertArraySize from '../src/middlewares/AssertArraySize';

const routes = Router();

routes.get('/', assertArraySize, (req, res) => res.status(200).send('OK'));

export default routes;
