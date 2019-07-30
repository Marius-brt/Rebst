const jsonParser = require('./jsonParser')
const response = require('./response')
const Console = require('./console')
const request = require('./request')
const printer = require('./errorPrinter')

module.exports = exports = (router, settings) => {
  return (req, res) => {
    Object.keys(settings.headers).forEach(function(key) {
      res.setHeader(key, settings.headers[key])
    })
    jsonParser(req)
    response(req, res, settings)
    request(req, res, settings)
    if(settings.console) Console(req, res)
    for (let addon of exports.addons) {
      addon(req, res)
    }
    req.on('end', () => {
      router.route(req, res)
    })
  }
}

exports.use = (newMiddleware) => {
  exports.addons.push(newMiddleware)
}

exports.addons = []
