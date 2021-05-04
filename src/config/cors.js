module.exports = function(req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header('Acess-Control-Allow-Origin', 'GET, POST, OPTIONS, PUT, PATH, DELETE')
    res.header('Acess-Control-Allow-Origin', 'Origin, X-Requested-with, Content-Type')
    next()
}
