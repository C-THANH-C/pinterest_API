import express from 'express';
import { getImage, getImageWithName } from '../controllers/imageController.js';

const imageRouter = express.Router();

imageRouter.get('/get-image', getImage)
imageRouter.get("/get-image-with-name/:nameImage", getImageWithName)
export default imageRouter