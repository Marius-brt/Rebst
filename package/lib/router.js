const urlParser = require('./urlParser')
const fs = require('fs')
const path = require('path')
const mime = require('mime-types')

const methods = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLINK', 'PURGE', 'LOCK', 'UNLOCK', 'PROPFIND', 'VIEW']

const Router = function() {
  this.routes =
    { '404': (req, res) => res.rebst({status: 404}) }
  methods.forEach(method => {
    this.routes[method] = {}
  })
}

Router.prototype.route = function(req, res) {
  if(!methods.includes(req.method.toUpperCase())) {
    res.rebst({status: 405})
    return
  }
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

Router.prototype.static = function(dir) {
  return new Promise((resolve, reject) => {
    const directory = path.dirname(require.main.filename) + dir
    fs.readdir(directory, (err, files) => {
      if (err) {
        console.log('Error reading directory: ' + dir)
        return reject(err)
      }
      for (let i = 0; i < files.length; i++) {
        const url = files[i]
        const filepath = path.join(directory, url)

        fs.stat(filepath, (err, stats) => {
          if (err) {
            console.log('Error getting stats for: ' + filepath)
            reject(err)
          }
          if (stats.isFile()) {
            this.routes.GET['/' + url] = (req, res) => {
              return new Promise((resolve, reject) => {
                const contentType = mime.contentType(url) || 'application/octet-stream'
                fs.readFile(filepath, (err, data) => {
                  if (err) {
                    console.log(err)
                    reject('error reading file: ' + filepath)
                  }
                  res.writeHead(200, { 'Content-Type': contentType })
                  res.write(data.toString())
                  res.end()
                  resolve()
                })
              })
            }
          }
          if (i === files.length - 1) resolve()
        })
      }
    })
  })
}

module.exports = exports = Router