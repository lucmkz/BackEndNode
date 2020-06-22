import 'reflect-metadata';

import dontenv from 'dotenv';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import 'express-async-errors';
import routes from './routes';

import uploadConfig from './config/upload';

import AppError from './errors/AppErros';

import './database';

dontenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'internal server error',
  });
});

const port = process.env.PORT || 3333;

app.listen(port, () => {
  console.log(`Server started at Port ${port}`);
});
