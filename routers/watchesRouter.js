import express from 'express';
import {
    getWatches,
    searchWatches,
    postWatches,
    getOneWatches,
    updateWatches,
    deleteWatches,
} from '../controller/watchesController.js';

const watchesRouter = express.Router();

watchesRouter.get('/watches', getWatches);

watchesRouter.get('/watches/searchOne/:key', getOneWatches);

watchesRouter.get('/watches/search/:key', searchWatches);

watchesRouter.post('/watches/post', postWatches);

watchesRouter.post('/watches/update', updateWatches);

watchesRouter.post('/watches/delete', deleteWatches);

export default watchesRouter;
