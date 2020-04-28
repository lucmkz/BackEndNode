import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// Toda rota que iniciar com /appointments, vou é necessário re-escrever
routes.use('/appointments', appointmentsRouter);

export default routes;
