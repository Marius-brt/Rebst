const statusMes = require('http').STATUS_CODES
const jsonxml = require('jsontoxml')
var staticOptions = {}

function rebst(req, res, next) {
    staticOptions.format == 'xml' ? res.setHeader("Content-Type", "application/xml") : res.setHeader("Content-Type", "application/json");
    res.send(res.rebst)
    next()
}

function send(params = {status: 200, data: null}) {
    const status = params.status || 200
    const success = status >= 200 && status < 300 ? true : false
    const message = statusMes[status]
    var result = {
        success: success,
        message: message
    }
    if(staticOptions.version != null) result['version'] = staticOptions.version
    if(staticOptions.payload != null) result['payload'] = staticOptions.payload
    if(success && params.data != null) result['data'] = params.data

    return staticOptions.format == 'xml' ? jsonxml(result) : result
}

function Options(options = {format: 'json', payload: null, version: ''}) {
    staticOptions = {
        format: options.format || 'json'
    }
    if(options.payload != null) staticOptions['payload'] = options.payload
    if(options.version != '') staticOptions['version'] = options.version
}

module.exports = rebst
module.exports.send = send
module.exports.options = Options