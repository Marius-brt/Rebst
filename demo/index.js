const express = require('express')
const app = express()
const rebst = require('rebst')

rebst.options({
    version: '1.0.0',
    headers: {
      'Allow-Control-From-Origin': '*'
    },
    console: true
})

app.get('/user/:id', function (req, res) {
  if(req.params.id == 1) {
    rebst.send(res, {
        data: {
            id: 1,
            user: 'name',
            email: 'user@example.com'
        }
    })
  } else {
    rebst.send(res, {
      status: 404
    })
  }
})

app.get('/redirect', function(req, res) {
  rebst.redirect(res, 'https://www.google.com')
})

app.listen(3000, function () {
  console.log('Server is running on port 3000')
})