const Parser = require("fast-xml-parser").j2xParser
var jsonxml = new Parser()
const httpMes = require('http').STATUS_CODES

const time = require('./time')

module.exports = exports = (req, res, settings) => {
    res.rebst = (params = {status: 200, data: null, headers: null}) => {
        if(!res.finished) {
            const status = params.status || 200
            const format = settings.format.toLowerCase()
            var result = {
                success: status < 400 ? true : false,
                message: httpMes[status],
                time: settings.time ? time() : null,
                version: settings.version,
                payload: settings.payload,
                data: status < 400 ? params.data : null
            }
            for(key in result) {
                if(result[key] == null || result[key] == undefined) delete result[key]
            }
            if(params.headers != null || params.headers != undefined) {
                Object.keys(params.headers).forEach((key) => {
                    res.setHeader(key, params.headers[key])
                })
            }
            res.writeHead(status, { 'Content-Type': `application/${format}` })
            if(format == 'xml') {
                res.write(jsonxml.parse(result))
            } else if(format == 'html') {
                res.write(params.data)
            } else {
                res.write(JSON.stringify(result))
            }        
            res.end()
        }
    }
    res.send = (msg = '') => {
        if(!res.finished) {
            res.write(msg)
            res.end()
        }
    }
    res.redirect = (url, status = 302) => {
        if(!res.finished) {
            res.writeHead(status,  {Location: url})
            res.end()
        }
    }
}