const time = require('./time')
const httpMes = require('http').STATUS_CODES
const colors = require('colors')

module.exports = (req, res) => {
    res.on('finish', () => {
        if(res.statusCode < 300) {
            console.log(`${time()} > Request type : ${req.method} | Request path : '${req.url}' | Response status : ${res.statusCode} | Message : '${httpMes[res.statusCode]}'`.yellow)
        } else {
            console.log(`${time()} > Request type : ${req.method} | Request path : '${req.url}' | Response status : ${res.statusCode} | Message : '${httpMes[res.statusCode]}'`.red)
        }
    })
}