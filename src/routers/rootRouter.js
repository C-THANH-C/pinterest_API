import express from 'express';
import userRouter from './userRouter.js';
import imageRouter from './imageRouter.js';
import pageRouter from './pageRouter.js';

const rootRouter = express.Router();

rootRouter.use('/user', userRouter)
rootRouter.use('/image', imageRouter)
rootRouter.use('/page', pageRouter)
export default rootRouter