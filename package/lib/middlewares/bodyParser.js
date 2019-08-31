const printer = require('../errorPrinter')
const jsonxml = require('fast-xml-parser')

module.exports = exports = (req, res, settings) => {
  var encoding = (req.headers['content-type'] || 'undefined').toLowerCase()  
  let content = ''
  req.on('data', data => {
    content += data.toString()
  })
  req.on('end', () => {
    try {
      switch(encoding) {
        case 'application/x-www-form-urlencoded':
          req.bodyType = 'urlencoded'
          var result = {}
          var urlEncodedData = content.split('&')
          if(urlEncodedData[0] != '') {
            for(i = 0; i < urlEncodedData.length; i++) {
              var splits = urlEncodedData[i].split('=')
              result[splits[0]] = splits[1]
            }
            req.body = result
          } else {
            req.body = null
          }
          break
        case 'application/json':
          req.bodyType = 'json'
          req.body = JSON.parse(content)
          break
        case 'application/xml':
            req.bodyType = 'xml'
            req.body = jsonxml.parse(content)
            break
        case 'text/plain':
          req.bodyType = 'text'
          req.body = content
          break
        case 'undefined':
          req.body = null
          break
        default:
          req.bodyType = encoding
          req.body = null
          if(settings.unsupportedErr) {
            res.rebst({
              status: 415
            })
          } else {
            printer(`Body format '${encoding}' is not supported !`)
          }
          break
      }
    } catch (e) {
      req.body = null
    }
  })    
}