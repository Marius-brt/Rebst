const express = require('express')
const app = express()
const rebst = require('rebst')

rebst.options({
    version: '1.0.0'
})

app.get('/', function (req, res, next) {
  res.rebst = rebst.send({
      data: {
          id: 1,
          user: 'name',
          email: 'user@example.com'
      }
  })
  next()
}, rebst)

app.listen(3000, function () {
  console.log('Server is running on port 3000')
})
