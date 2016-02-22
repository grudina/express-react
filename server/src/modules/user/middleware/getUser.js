export default checkToken = function(req, res, next) {
    req.token.then((token, err) => {
        if(err) {
            throw new Error(err);
        }

        if(token) {
            req.user = User.find({_id: token.user_id}).exec();
        }

        next()
    })
}