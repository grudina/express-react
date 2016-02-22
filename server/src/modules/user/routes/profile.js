export default profile = (req, res, next) => {
    req.user.then(user => {
        res.json({ok: true, data: user})
    })
};