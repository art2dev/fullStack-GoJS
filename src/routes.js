import { Router } from 'express';

import UserController from './app/controllers/UserController'; // controller
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// store
routes.post('/users', UserController.store); // use the metod store when got Router object error
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware); // add authMiddleware aqui Globalmente, para rodar para todas rotas abaixo

routes.put('/users', UserController.update); // add authMiddleware se caso usar only here

export default routes;
