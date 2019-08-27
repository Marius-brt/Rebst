const Parser = require("fast-xml-parser").j2xParser
var jsonxml = new Parser()
const httpMes = require('http').STATUS_CODES

const time = require('./time')
const encrypt = require('./middlewares/encrypt')

module.exports = exports = (req, res, settings) => {
    res.rebst = (params = {status: 200, data: null, headers: null, bpEncrypt: false}) => {
        if(!res.finished) {
            const status = params.status || 200
            const format = settings.format.toLowerCase()
            const idType = settings.resId.type.toLowerCase()
            var result = {
                success: status < 400 ? true : false,
                message: httpMes[status],
                id: idType == 'both' || idType == 'body' && settings.resId.enabled ? res.id : null,
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
                res.write(Encrypt(jsonxml.parse(result), params.bpEncrypt, settings.encrypt))
            } else {
                res.write(Encrypt(JSON.stringify(result), params.bpEncrypt, settings.encrypt))
            }        
            res.end()
            return result
        }
    }
    res.send = (msg = '', bpEncrypt = false) => {
        if(!res.finished) {            
            res.write(Encrypt(msg, bpEncrypt, settings.encrypt))
            res.end()
        }
    }
    res.render = (params = {status: 200, html: '', bpEncrypt: false}) => {
        if(!res.finished) {
            res.writeHead(params.status || 200, { 'Content-Type': 'text/html' })
            res.write(Encrypt(params.html, params.bpEncrypt, settings.encrypt) || '')
            res.end()
        }
    }
    res.redirect = (url, status = 302) => {
        if(!res.finished) {
            res.writeHead(status,  { Location: url })
            res.end()
        }
    }
    res.tea = () => {
        res.rebst({
            status: 418
        })
    }
}

function Encrypt(text, bypass, settings) {
    if(settings.enabled && !bypass) {
        return encrypt.encrypt(settings.key, text)
    } else {
        return text
    }
}