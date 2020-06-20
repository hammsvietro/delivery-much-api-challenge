import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes';

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
  }

}


export default new App().app;
