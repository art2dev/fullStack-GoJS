import { Router } from 'express';

import UserController from './app/controllers/UserController'; // controller
import SessionController from './app/controllers/SessionController'; // controller

const routes = new Router();

routes.post('/users', UserController.store); // use the metod store when got Router object error
routes.put('/users', UserController.update);
routes.post('/sessions', SessionController.store);

export default routes;
