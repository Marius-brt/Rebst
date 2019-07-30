const colors = require('colors')
const printer = require('./errorPrinter')

module.exports = (err, port) => {
    if(err.code === 'EADDRINUSE') {
        printer(`The port ${port} is already in use !`)
        process.exit()
    } else {
        printer(err.message)
    }
}