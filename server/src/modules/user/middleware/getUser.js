import {User} from './../documents/User'

export const getUser = function(req, res, next) {
    req.token.then((token, err) => {
        if(err) {
            throw new Error(err);
        }
        if(token) {
            req.user = User.findOne({_id: token.user}).exec();
            next()
        } else {
            res.status(403).json({
                ok: false,
                message: "Access Denied"
            })
        }
    })
}