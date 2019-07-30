const colors = require('colors')
const { version } = require('../package.json')

const middleware = require('./middleware')
const router = require('./router')
const errorHandler = require('./errorHandler')
const printer = require('./errorPrinter')

const formatSupported = ['json', 'xml', 'html']

var settings = {
    port: 3000,
    version: null,
    payload: null,
    time: false,
    format: 'json',
    console: true,
    blackList: [],
    protocol: 'http',
    httpsOpt: {
        key: null,
        cert: null
    },
    headers: {}
}

exports.init = (params = settings) => {
    if(params != null) {
        Object.keys(params).forEach(key => {
            if(key in settings) settings[key] = params[key]
        })
    }    
    if(formatSupported.includes(settings.format.toLowerCase())) {
        const curRouter = new router
        var server
        if(settings.protocol.toLowerCase() == 'http' || settings.protocol == '') {
            server = require('http').createServer(middleware(curRouter, settings))
        } else if(settings.protocol.toLowerCase() == 'https') {
            if(settings.httpsOpt.key != null && settings.httpsOpt.cert != null) {
                server = require('https').createServer(settings.httpsOpt, middleware(curRouter, settings))
            } else {
                printer('Not all the parameters of the HTTPS protocol have been entered !')
                process.exit()
            }
        } else {
            printer(`The ${settings.protocol} protocol does not exist or is not supported by Rebst !`)
            process.exit()
        }
        server.listen(settings.port, () => {
            console.log(`Rebst > Server is running on port ${settings.port}`.green)
            console.log(`Rebst > Version : ${version} | Author : Marius Brt | GitHub : https://github.com/Marius-brt/Rebst`.cyan)
            console.log(`Settings > Port : ${settings.port} | Response format : ${settings.format} | Version : ${settings.version} | Payload : ${JSON.stringify(settings.payload)} | Console : ${settings.console}`.cyan)
        }).on('error', (err) => {
            errorHandler(err, settings.port)
        })
        return curRouter
    } else {
        printer('Response format invalid !')
        process.exit()
    }
}

exports.use = middleware.use