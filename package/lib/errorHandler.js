const colors = require('colors')

module.exports = (err, port) => {
    if(err.code === 'EADDRINUSE') {
        printError(`the port ${port} is already in use !`)
    } else {
        printError(err.message)
    }
}

function printError(err) {
    console.log(`Rebst > ${err}`.red)
}