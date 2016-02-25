import {Song} from './../documents/Song'
import {filter} from './../filters/song'

export function list(req, res, next) {
    Song.find({}).exec().then((data, err) => {
        res.json({ok: true, data: data});
    })
}