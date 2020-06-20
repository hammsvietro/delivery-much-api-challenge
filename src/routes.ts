import { Router } from 'express';

const routes = Router();

routes.get('/', (req, res) => res.json({ hey: 'hey' }));

export default routes;
