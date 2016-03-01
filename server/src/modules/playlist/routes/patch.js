import {build} from './../filters/playlist'

export function patch(req, res, next) {
    let filter = build(Object.keys(req.body));
    req.playlist.then(playlist => {
        console.log('=>' , playlist);
        filter.setData(req.body).isValid().then((data, err) => {
            Object.keys(req.body).forEach(el => {
                playlist[el] = req.body[el];
            });
            playlist.save().then(() => res.json({ok: true, data: playlist}))
        }).catch(errors => res.json({ok: false, errors}))
    })
    
}