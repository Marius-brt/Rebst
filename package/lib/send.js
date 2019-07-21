const jsonxml = require('jsontoxml')
const httpMes = require('http').STATUS_CODES

const time = require('./time')

module.exports = exports = (req, res, settings) => {
    res.rebst = (params = {status: 200, data: null}) => {
        const status = params.status || 200
        res.writeHead(status, { 'Content-Type': settings.format.toLowerCase() == 'xml' ? 'application/xml' : 'application/json' })
        const result = {
            success: status < 300 ? true : false,
            message: httpMes[status],
            time: settings.time ? time() : null,
            version: settings.version,
            payload: settings.payload,
            data: status < 300 ? params.data : null
        }
        for(key in result) {
            if(result[key] == null || result[key] == undefined) delete result[key]
        }
        res.write(settings.format.toLowerCase() == 'xml' ? jsonxml(result) : JSON.stringify(result))
        res.end()
    }
    res.send = (msg) => {
        res.write(msg)
        res.end()
    }
}