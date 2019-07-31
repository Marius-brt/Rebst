const rebst = require('./index')
const app = rebst.init({
    format: 'xml'
})

app.get('/', (req, res) => {
    res.rebst({
        data: req.body
    })
})