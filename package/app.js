const rebst = require('./index')
const fs = require('fs')
const app = rebst.init()

app.get('/', (req, res) => {    
    res.rebst({
        data: {
            id: req.headers['test']
        },
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "*"
        }
    })
})