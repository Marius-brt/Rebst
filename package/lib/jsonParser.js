module.exports = exports = function jsonParser(req) {
  let content = ''
  req.on('data', data => {
    content += data.toString()
  })
  req.on('end', () => {
    try {
      req.body = JSON.parse(content)
    } catch (e) {
      req.body = null
    }
  })
}
