const rebst = require('./index')
const app = rebst.init()

app.get('/', (req, res) => {
    res.rebst({
        data: {
            host: req.host,
            path: req.path
        },
        headers: {
            'Test': 'kok'
        }
    })
})
