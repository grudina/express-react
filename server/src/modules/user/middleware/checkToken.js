// import Token from './../documents/Token'

export default checkToken = function(req, res, next) {
    req.token = Token.find({token: req.query.token}).populate('user').exec();
    next();
}