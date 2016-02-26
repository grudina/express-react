/** @flow */
import {Router} from 'express'
import {Song} from './documents/Song'

import {create} from './routes/create'
import {update} from './routes/update'
import {single} from './routes/single'
import {list} from './routes/list'
import {patch} from './routes/patch'

export const routes = Router();

function checkId(withId: Function, withoutId: Function): Function {
    return (req, res, next) => {
        if(req.params.id) {
            return withId ? withId(req, res, next) : next()
        } else {
            return withoutId ? withoutId(req, res, next) : next()
        }
    }
};

function handleNotFound(param: String, fn: Function): Function {
    return (req, res, next) => {
    let p = req[param];
        p.then((entity, error) => {
            if(entity) {
                return fn(req, res, next)
            } else {
                res.status(404).json({ok: false, error: "Not Found"})
            }
        })
    }
};

function methodNotAvailable(req, res, next): Any {
    res.status(500).json({ok: false, error: "Method Not Available"})
}

routes
    .route('/:id?')
    .all((req, res, next) => {
        if(req.params.id) {
            req.song = Song.findOne({_id: req.params.id}).exec()
        }
        next();
    })
    .post(checkId(handleNotFound('song', update), create))
    .get(checkId(handleNotFound('song', single), list))
    .patch(checkId(handleNotFound('song', patch), methodNotAvailable));