

import { Router } from 'express';
import auth from "../middleware/auth.js"
import {createVendor, getVendors} from '../controllers/vendor.js';

const roomRouter = Router();
roomRouter.post('/', auth, createVendor);
roomRouter.get('/', getVendors);

export default roomRouter;
