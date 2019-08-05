const bodyParser = require('./middlewares/bodyParser')
const response = require('./response')
const Console = require('./console')
const request = require('./request')
const cors = require('./middlewares/cors')

module.exports = exports = (router, settings, emitter) => {
  return (req, res) => {
    req.on('end', () => {
      emitter.emit('received')
    })
    res.on('finish', () => {
      emitter.emit('sended')
    })

    Object.keys(settings.headers).forEach(function(key) {
      res.setHeader(key, settings.headers[key])
    })

    exports.needBody = () => {
      if(req.body == null) {
        res.rebst({
          status: 400
        })
      }
    }

    request(req, res, settings)
    bodyParser(req, res, settings.bodyParser)
    if(settings.cors.enabled) cors(req, res, settings.cors)
    response(req, res, settings)
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