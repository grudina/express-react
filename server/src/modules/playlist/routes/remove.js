import {STATUS_DELETED} from './../constants'


export function remove(req, res, next) {
    req.playlist.then(playlist => {
        playlist.status = STATUS_DELETED;
        playlist.save().then(() => res.json({ok: true, data: playlist}))
    })
}