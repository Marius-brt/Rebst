const cookie = require('cookie')

module.exports = (req, res) => {
    var cookies = req.headers.cookie
    if(cookies) {
        req.cookies = cookie.parse(req.headers.cookie)
    }
}