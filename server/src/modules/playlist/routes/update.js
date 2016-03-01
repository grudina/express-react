import {Playlist} from './../documents/Playlist'
import {filter} from './../filters/playlist'

export function update(req, res, next) {
    filter.setData(req.body).isValid().then(data => {
        let playlist = new Playlist(req.body);
        playlist.save().then(() => {
            res.json({ok: true, data: playlist})
        })
    }).catch(errors => res.json({ok: false, errors}))
}

