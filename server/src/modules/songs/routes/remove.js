import {Song} from './../documents/Song'
import {STATUS_DELETED} from './../constants'

export function remove(req, res, next) {
    req.song.then(song => {
        song.status = STATUS_DELETED;
        song.save().then(() => res.json({ok: true, data: song}))
    })
}