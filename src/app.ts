import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes';
import testRouter from '../__tests__/routes';

dotenv.config();

class App {
  app: Application;


  constructor() {
    this.app = express();
    this.middlewares();
    this.security();
    this.router();
  }

  middlewares() {
    this.app.use(express.json());
  }

  security() {
    this.app.use(cors());
  }

  router() {
    this.app.use(router);
    if(process.env.NODE_ENV === 'test') this.app.use(testRouter);
  }
}


export default new App().app;
