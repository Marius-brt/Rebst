const time = require('./time')
const httpMes = require('http').STATUS_CODES
const colors = require('colors')
var path = require('path')
const winston = require('winston')
const logger = winston.createLogger({
    format: winston.format.printf(text => {
        return text.message
    }),
    transports: [
      new winston.transports.File({
        filename: path.dirname(require.main.filename) + '/logs/rebst.log'
    })]
});

module.exports = (req, res, logSettings) => {
    var start
    req.on('end', () => {
        start = process.hrtime()
    })
    res.on('finish', () => {
        var end = process.hrtime(start)
        var text = `${time()} > Request type : ${req.method} | Request path : '${req.url}' | Response status : ${res.statusCode} | Message : '${httpMes[res.statusCode]}' | Params : ${JSON.stringify(req.params)} ${res.id != null ? '| id : ' + res.id + ' ' : ''}| Execution time : ${end[1] / 1000000}ms`
        if(res.statusCode < 400) {
            console.log(`${text}`.yellow) 
        } else {
            console.log(`${text}`.red)
        }
        if(logSettings) {
            logger.info(`"${text}"`)
        }
    })
}