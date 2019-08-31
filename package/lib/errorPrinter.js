module.exports = (err, fatal = false, useLog = false) => {
    console.log(`Rebst > ${err}`.red)
    if(useLog) {
        const time = require('./time')
        const path = require('path')
        const winston = require('winston')
        const logger = winston.createLogger({
            format: winston.format.printf(text => {
                return text.message
            }),
            transports: [
              new winston.transports.File({
                filename: path.dirname(require.main.filename) + '/logs/rebst-error.log'
            })]
        })
        logger.error(`"${time()} > ${err}"`)
        logger.on('finish', () => {
            if(fatal) process.exit()
        });
    } else {
        if(fatal) process.exit()
    }
}