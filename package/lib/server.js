const colors = require('colors')
const { version } = require('../package.json')
const eventEmitter = require('events')

const middleware = require('./middleware')
const router = require('./router')
const errorHandler = require('./errorHandler')
const printer = require('./errorPrinter')

const formatSupported = ['json', 'xml', 'html']

var corsSettings = {
    enabled: false,
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,COPY,HEAD,OPTIONS,LINK,UNLINK,PURGE,LOCK,UNLOCK,PROPFIND,VIEW',
    exposedHeaders: [],
    allowedHeaders: [],
    credentials: false,
    maxAge: 10
}

var bodyParserSettings = {
    enabled: false,
    bodyReqErr: false
}

var resIdSettings = {
    enabled: false,
    type: 'body',
    headerName: 'Res-Id'
}

var settings = {
    localIp: 'localhost',
    port: 3000,
    protocol: 'http',
    httpsOpt: {
        key: null,
        cert: null
    },
    version: null,
    payload: null,
    time: false,
    format: 'json',
    headers: {},
    console: true,
    blackList: [],
    cors: corsSettings,
    bodyParser: bodyParserSettings,
    resId: resIdSettings
}

class Server extends eventEmitter {
    init(params = settings) {
        this.emit('init')
        settings = Object.assign(settings, params)
        settings.cors = Object.assign(corsSettings, params.cors)
        settings.bodyParser = Object.assign(bodyParserSettings, params.bodyParser)
        settings.resId = Object.assign(resIdSettings, params.resId)

        if(formatSupported.includes(settings.format.toLowerCase())) {
            const curRouter = new router
            var server
            if(settings.protocol.toLowerCase() == 'http' || settings.protocol == '') {
                server = require('http').createServer(middleware(curRouter, settings, this))
            } else if(settings.protocol.toLowerCase() == 'https') {
                if(settings.httpsOpt.key != null && settings.httpsOpt.cert != null) {
                    server = require('https').createServer(settings.httpsOpt, middleware(curRouter, settings, this))
                } else {
                    printer('Not all the parameters of the HTTPS protocol have been entered !', true)
                }
            } else {
                printer(`The ${settings.protocol} protocol does not exist or is not supported by Rebst !`, true)
            }
            server.listen(settings.port, settings.localIp, () => {
                console.log(`Rebst > Server is running on port ${settings.port}`.green)
                console.log(`Rebst > Version : ${version} | Author : Marius Brt | GitHub : https://github.com/Marius-brt/Rebst`.cyan)
                console.log(`Settings > Port : ${settings.port} | Output format : ${settings.format} | Version : ${settings.version} | Payload : ${JSON.stringify(settings.payload)} | Time : ${settings.time} | Console : ${settings.console}`.cyan)
            }).on('error', (err) => {
                errorHandler(err, settings.port)
            })
            return curRouter
        } else {
            printer('Response format invalid !', true)
        }
    }
    use(newMiddleware) {
        middleware.use(newMiddleware)
    }
    err(err = '', fatal = false) {
        printer(err, fatal)
    }
    needBody() {
        middleware.needBody()
    }
}

module.exports = new Server