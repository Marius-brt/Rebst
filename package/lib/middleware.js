const response = require('./response')
const Console = require('./console')
const request = require('./request')
const resId = require('./middlewares/resId')

let plugins = []
let staticPlugins = {
  resId: {
    enabled: false
  },
  encrypt: {
    enabled: false
  }
}

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

    if(staticPlugins.encrypt.enabled) {
      const encrypt = require('./middlewares/encrypt')
      var valid = encrypt.checkKey(staticPlugins.encrypt.key, settings.log)
      if(!valid) res.finished = true
    }

    res.id = resId(res, settings.resId)

    request(req, res, settings)    
    for(let plugin of plugins) {
      switch(plugin.params) {
        case 'both':
          plugin.path(req, res, plugin.options)
          break
        case 'req':
          plugin.path(req, plugin.options)
          break
        case 'res':
          plugin.path(res, plugin.options)
          break
        case 'none':
          plugin.path(plugin.options)
          break
      }
    }
    for (let addon of exports.addons) {
      addon(req, res)
    }
    if(req.body == undefined) {
      let content = ''
      req.on('data', data => {
        content += data.toString()
      })
      req.on('end', () => {
        req.body = content
      })
    }
    exports.needBody = () => {
      if(req.body == null) {
        res.rebst({
          status: 400
        })
      }
    }  
    req.on('end', () => {
      router.route(req, res)
    })
    response(req, res, settings, staticPlugins.encrypt)
    if(settings.console) Console(req, res, settings.log)
  }
}

exports.use = (path) => {
  exports.addons.push(path)
}

exports.addons = []

exports.enablePlugin = (path, params = 'both', type = 'end', options, defaultSettings) => {
  options = Object.assign(defaultSettings, options)
  if(type.toLowerCase() == 'start') {
    plugins.unshift({
      path: path,
      params: params.toLowerCase(),
      options: options
    })
  } else {
    plugins.push({
      path: path,
      params: params.toLowerCase(),
      options: options
    })
  }
}

exports.enableStaticPlugin = (name, options = null, defaultSettings = null) => {
  if(!options) {
    staticPlugins[name] = true
  } else {
    options = Object.assign(defaultSettings, options)
    options.enabled = true
    staticPlugins[name] = options
  }
}