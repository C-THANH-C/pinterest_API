import express from 'express';
import { getImageWithId } from '../controllers/imageController.js';

const pageRouter = express.Router();

pageRouter.get('/get-info-image/:idImage', getImageWithId)
export default pageRouter