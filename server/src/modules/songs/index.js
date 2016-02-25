import {Router} from 'express'
import {Song} from './documents/Song'

import {create} from './routes/create'
import {update} from './routes/update'
import {single} from './routes/single'
import {list} from './routes/list'

export const routes = Router();

let checkId = (withId, withoutId) => (req, res, next) => {
    if(req.params.id) {
        return withId ? withId(req, res, next) : next()
    } else {
        return withoutId ? withoutId(req, res, next) : next()
    }
};

let handleNotFound = (param, fn) => (req, res, next) => {
    let p = req[param];
    console.log("handleNotFound")
    p.then((entity, error) => {
        console.log("=>", entity, error);
        if(entity && entity != null) {
            fn(req, res, next)
        } else {
            res.status(404).json({ok: false, error: "Not Found"})
        }
    })
};

routes
    .route('/:id?')
    .all((req, res, next) => {
        if(req.params.id) {
            req.song = Song.findOne({_id: req.params.id}).exec()
        }
        next();
    })
    .post(checkId(handleNotFound('song', update), create))
    .get(checkId(handleNotFound('song', single), list));
