const rebst = require('./index')
const app = rebst.init()

app.get('/', (req, res) => {
    res.rebst()
})