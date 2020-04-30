import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

// Toda rota que iniciar com /appointments, vou é necessário re-escrever
routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);

export default routes;
