import {Token} from './../documents/Token'

export const checkToken = function(req, res, next) {
    req.token = Token.findOne({token: req.query.token || ""}).exec();
    next();
}