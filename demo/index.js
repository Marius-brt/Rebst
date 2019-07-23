const rebst = require('rebst')
const app = rebst.init({
  port: 3000,
  version: '1.0.0'
})

const middleware = require('./middleware')
rebst.use(middleware)

app.get('/user/:id', (req, res) => {
  res.rebst({
    status: 200,
    data: {
      id: req.params.id
    }
  })
})