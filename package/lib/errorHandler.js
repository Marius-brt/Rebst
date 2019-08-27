const colors = require('colors')
const printer = require('./errorPrinter')

module.exports = (err, port, localIp, useLog) => {
    if(err.code === 'EADDRINUSE') {
        printer(`The port ${port} is already in use !`, true, useLog)
    } else if(err.code === 'EADDRNOTAVAIL') {
        printer(`${localIp} is unvailable !`, true, useLog)
    } else {
        printer(err.message)
    }
}