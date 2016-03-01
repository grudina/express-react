import {Playlist} from './../documents/Playlist'

export function list(req, res, next) {
    Playlist.find({}).exec().then((data, err) => {
        res.json({ok: true, data: data});
    })
}