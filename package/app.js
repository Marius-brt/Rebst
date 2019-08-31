const rebst = require('./index')
const app = rebst.init()
rebst.get('https://www.rebst.cf/#/', (data) => {
    console.log(data)
})

app.get('/', (req, res) => {
    res.rebst()
})