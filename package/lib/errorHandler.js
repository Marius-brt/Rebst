const colors = require('colors')
const printer = require('./errorPrinter')

module.exports = (err, port, localIp) => {
    if(err.code === 'EADDRINUSE') {
        printer(`The port ${port} is already in use !`, true)
        process.exit()
    } else if(err.code === 'EADDRNOTAVAIL') {
        printer(`${localIp} is unvailable !`)
    } else {
        printer(err.message)
    }
}