import {User} from './../documents/User'

export function register(req, res, next) {
    User.register(new User({...req.body}), req.body.password, (data, ...options) => {
        res.json({...options, data});
    })
}