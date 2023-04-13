import express from 'express';
import { getWatches, searchWatches } from '../controller/watchesController.js';

const watchesRouter = express.Router();

watchesRouter.get('/', getWatches);

watchesRouter.get('/search/:key', searchWatches);

export default watchesRouter;
