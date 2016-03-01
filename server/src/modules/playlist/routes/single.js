export function single(req, res, next) {
    req.playlist.then((playlist, err) => {
        res.json({ok: true, data: playlist})
    })
}