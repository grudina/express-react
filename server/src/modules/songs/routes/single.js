import {Song} from './../documents/Song'
import {filter} from './../filters/song'

export function single(req, res, next) {
    req.song.then((song, err) => {
        res.json({ok: true, data: song})
    })
}