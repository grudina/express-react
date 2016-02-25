import passport from 'passport'
import {Token} from './../documents/Token'

export function login(req, res, next) {
    passport.authenticate('local', {session: false}, function(err, user, info) {
        if (err) {
            return res.status(500).json({
                ok: false,
                error: err
            })
        }
        if (!user) {
            return res.status(401).json({ok: false, user: false})
        } else {
            let token = new Token({
                user: user._id,
                token: `SomeRandomString-${Math.random()}`
            });
            token.save().then((token, err) => {
                res.status(200).json({ok: true, user, token});
            });
        }
    })(req, res, next);
}