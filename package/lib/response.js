const Parser = require("fast-xml-parser").j2xParser
var jsonxml = new Parser()
const httpMes = require('http').STATUS_CODES

const time = require('./time')
const resId = require('./middlewares/resId')

module.exports = exports = (req, res, settings) => {
    res.rebst = (params = {status: 200, data: null, headers: null}) => {
        if(!res.finished) {
            const status = params.status || 200
            const format = settings.format.toLowerCase()
            var result = {
                success: status < 400 ? true : false,
                message: httpMes[status],
                id: resId(res, settings.resId),
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
                res.write(Encrypt(jsonxml.parse(result), settings.encrypt))
            } else {
                res.write(Encrypt(JSON.stringify(result), settings.encrypt))
            }        
            res.end()
            return result
        }
    }
    res.send = (msg = '') => {
        if(!res.finished) {
            resId(res, settings.resId)
            res.write(msg)
            res.end()
        }
    }
    res.render = (params = {status: 200, html: ''}) => {
        if(!res.finished) {
            resId(res, settings.resId)
            res.writeHead(params.status || 200, { 'Content-Type': 'text/html' })
            res.write(params.html || '')
            res.end()
        }
    }
    res.redirect = (url, status = 302) => {
        if(!res.finished) {
            resId(res, settings.resId)
            res.writeHead(status,  {Location: url})
            res.end()
        }
    }
}

function Encrypt(text, settings) {
    if(settings.enabled) {
        const Cryptr = require('cryptr')
        const cryptr = new Cryptr(settings.key)
        const crypted = cryptr.encrypt(text)
        return crypted;
    } else {
        return text
    }
}