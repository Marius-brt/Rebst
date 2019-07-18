const statusMes = require('http').STATUS_CODES
const jsonxml = require('jsontoxml')
var staticOptions = {
    format: 'json',
    payload: null,
    version: null,
    headers: null
}

function send(res, params = {status: 200, data: null, headers: null}) {
    const status = params.status || 200
    const success = status >= 200 && status < 300 ? true : false
    const message = statusMes[status]
    var result = {
        success: success,
        message: message
    }
    if(staticOptions.version != null) result['version'] = staticOptions.version
    if(staticOptions.payload != null) result['payload'] = staticOptions.payload
    if(staticOptions.headers != null) {
        for (let [key, value] of Object.entries(staticOptions.headers)) {
            res.setHeader(key, value)
        }
    }
    if(params.headers != null) {
        for (let [key, value] of Object.entries(params.headers)) {
            res.setHeader(key, value)
        }
    }
    if(success && params.data != null) result['data'] = params.data

    staticOptions.format == 'xml' ? res.setHeader("Content-Type", "application/xml") : res.setHeader("Content-Type", "application/json");
    res.status(status).send(staticOptions.format == 'xml' ? jsonxml(result) : result)
    res.end()
}

function Options(options = {format: 'json', payload: null, version: '', headers: null}) {
    staticOptions = options
}

function redirect(res, url) {
    return res.redirect(url);
}

function format_two_digits(n) {
    return n < 10 ? '0' + n : n;
}

module.exports = (req, res, next) => {
    res.on('finish', () => {
        d = new Date()
        hours = format_two_digits(d.getHours())
        minutes = format_two_digits(d.getMinutes())
        seconds = format_two_digits(d.getSeconds())
        console.log(`${hours + ":" + minutes + ":" + seconds} > Request type : ${req.method} | Request path : '${req.path}' | Request status : ${res.statusCode} | Message : ${statusMes[res.statusCode]} | Request params : ${JSON.stringify(req.params)}`)
    })
    next()
}
module.exports.send = send
module.exports.redirect = redirect
module.exports.options = Options