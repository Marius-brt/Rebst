const reqip = require('request-ip')

module.exports = (req, res, settings) => {
    req.on('end', () => {
        if(settings.blackList.includes(reqip.getClientIp(req))) {
            res.rebst({ status: 403 })
        }
    })
    req.ip = reqip.getClientIp(req)
    req.host = req.headers.host
    req.path = req.headers.host + req.url
}