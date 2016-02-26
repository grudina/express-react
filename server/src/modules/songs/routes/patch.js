import {build} from './../filters/song'

export function patch(req, res, next) {
    let filter = build(Object.keys(req.body));
    req.song.then(song => {
        console.log('=>', song);
        filter.setData(req.body).isValid().then((data, err) => {
            Object.keys(req.body).forEach(el => {
                song[el] = req.body[el];
            });
            song.save().then(() => res.json({ok: true, data: song}))
        }).catch(errors => res.json({ok: false, errors}))
    })
}