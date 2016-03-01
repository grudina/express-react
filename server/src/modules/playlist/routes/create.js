import {Playlist} from './../documents/Playlist'
import {filter} from './../filters/playlist'

export function create(req, res, next) {
    filter.setData(req.body).isValid().then(data => {
        let playList = new Playlist(req.body);
        playList.save().then(() => {
            res.json({ok: true, data: playList})
        })
    }).catch(errors => res.json({ok: false, errors}))
}