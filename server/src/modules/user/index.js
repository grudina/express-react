import {Router} from 'express'
import passport from 'passport'

import {login} from './routes/login'
import {profile} from './routes/profile'
import {register} from './routes/register'
import {playlist} from './routes/playlist'

import {checkToken} from './middleware/checkToken'
import {getUser} from './middleware/getUser'

export const routes = Router();
routes.get('/profile', checkToken, getUser, profile);
routes.post('/login', login);
routes.post('/register', register);

