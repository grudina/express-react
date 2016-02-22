import {Router} from 'express';

export const routes = Router();
routes.get('/profile', require('./routes/profile'));