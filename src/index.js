import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import rootRouter from './routers/rootRouter.js';
const app = express();
app.use(express.json());
app.use(cors({
    origin: '*'
}))
app.listen(8080)
app.use(rootRouter)
