const urlParser = require('./urlParser')

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLINK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND', 'VIEW']

const Router = function() {
  this.routes =
    { '404': (req, res) => res.rebst({status: 404}) }
  methods.forEach(method => {
    this.routes[method] = {}
  })
}

Router.prototype.route = function(req, res) {
  const method = req.method
  const url = req.url
  const routes = this.routes[method.toUpperCase()]
  var urlParsed = urlParser(routes, url)
  req.params = urlParsed.params
  const endpoint = this.routes[method][urlParsed.url] || this.routes['404']
  return endpoint(req, res)
}

methods.forEach(method => {
  Router.prototype[method.toLowerCase()] = function(url, callback) {
    this.routes[method][url] = callback
    return this
  }
})

module.exports = exports = Router