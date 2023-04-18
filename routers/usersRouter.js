import express from 'express';
import { getUsers, postUsers } from '../controller/usersController.js';

const usersRouter = express.Router();

usersRouter.get('/users', getUsers);

usersRouter.post('/users/post', postUsers);

export default usersRouter;
