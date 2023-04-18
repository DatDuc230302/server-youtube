import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import watchesRouter from './routers/watchesRouter.js';
import usersRouter from './routers/usersRouter.js';

// Default
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

// Routers
app.get('/', (req, res, next) => {
    res.send('Welcome to my Api Youtute - Author DatDuc');
});
app.use('/', watchesRouter);
app.use('/', usersRouter);

//Connect to mongoDB
const URI = 'mongodb+srv://admin:datyeudat2303@database1.oqnrpnl.mongodb.net/youtube';
mongoose
    .connect(URI)
    .then(() => {
        console.log('Success connect to DB');
        app.listen(PORT, () => console.log('App started at PORT: ', PORT));
    })
    .catch(() => {
        console.log('Failure connect to DB');
    });
