const jsonParser = require('./jsonParser')
const send = require('./send')
const Console = require('./console')

module.exports = exports = (router, settings) => {
  return (req, res) => {
    jsonParser(req)
    send(req, res, settings)    
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
