const time = require('./time')
const httpMes = require('http').STATUS_CODES
const colors = require('colors')

module.exports = (req, res) => {
    var start
    req.on('end', () => {
        start = process.hrtime()
    })
    res.on('finish', () => {
        var end = process.hrtime(start)
        if(res.statusCode < 400) {
            console.log(`${time()} > Request type : ${req.method} | Request path : '${req.url}' | Response status : ${res.statusCode} | Message : '${httpMes[res.statusCode]}' | Params : ${JSON.stringify(req.params)} | Execution time : ${end[1] / 1000000}ms`.yellow) 
        } else {
            console.log(`${time()} > Request type : ${req.method} | Request path : '${req.url}' | Response status : ${res.statusCode} | Message : '${httpMes[res.statusCode]}' | Params : ${JSON.stringify(req.params)} | Execution time : ${end[1] / 1000000}ms`.red)
        }
    })
}