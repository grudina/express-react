import {Song} from './../documents/Song'
import {filter} from './../filters/song'

export function create(req, res, next) {
    filter.setData(req.body).isValid().then(data => {
        let song = new Song(req.body);
        song.save().then(() => {
            res.json({ok: true, data: song})
        })
    }).catch(errors => {res.json({ok: false, errors})
    })
}