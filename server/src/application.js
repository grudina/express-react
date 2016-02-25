import express from 'express'
import multer from 'multer'
import bodyParser from 'body-parser'
import path from 'path'
import config from './config/index'
import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import {User} from './modules/user/documents/User'
import cookieParser from 'cookie-parser'
import session from'cookie-session'
import mongoose from 'mongoose'

import {routes as UserRoutes} from './modules/user/index'
import {routes as SongRoutes} from './modules/songs/index'

export const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(session({keys: ['secretkey1']}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect('mongodb://localhost/passport_local_mongoose_examples', function(err) {
    if (err) {
        console.log('Could not connect to mongodb on localhost. Ensure that you have mongodb running on localhost and mongodb accepts connections on standard ports!');
    }
});


app.use((req, res, next) => {
   if(req.url.indexOf('/api') !== -1) {
       next()
   } else {
       res.sendFile(path.join(__dirname, '../../public/index.html'))
   }
});

app.use('/api/user/', UserRoutes);
app.use('/api/song/', SongRoutes);

app.listen(config.port, () => {
    
});