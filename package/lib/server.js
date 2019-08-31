const colors = require('colors')
const { version } = require('../package.json')
const eventEmitter = require('events')

const middleware = require('./middleware')
const router = require('./router')
const errorHandler = require('./errorHandler')
const printer = require('./errorPrinter')

const formatSupported = ['json', 'xml', 'html']

var corsSettings = {
    origin: '*',
    methods: 'GET,POST,PUT,PATCH,DELETE,COPY,HEAD,OPTIONS,LINK,UNLINK,PURGE,LOCK,UNLOCK,PROPFIND,VIEW',
    exposedHeaders: [],
    allowedHeaders: [],
    credentials: false,
    maxAge: 10
}

var bodyParserSettings = {
    unsupportedErr: false
}

var resIdSettings = {
    enabled: false,
    type: 'body',
    headerName: 'Res-Id'
}

var encryptSettings = {
    key: ''
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
    resId: resIdSettings,
    encrypt: encryptSettings,
    log: false
}

class Server extends eventEmitter {
    init(params = settings) {
        settings = Object.assign(settings, params)
        settings.resId = Object.assign(resIdSettings, params.resId)
        settings.encrypt = Object.assign(encryptSettings, params.encrypt)

        if(formatSupported.includes(settings.format.toLowerCase())) {
            const curRouter = new router
            var server
            if(settings.protocol.toLowerCase() == 'http' || settings.protocol == '') {
                server = require('http').createServer(middleware(curRouter, settings, this))
            } else if(settings.protocol.toLowerCase() == 'https') {
                if(settings.httpsOpt.key != null && settings.httpsOpt.cert != null) {
                    const fs = require('fs')
                    const opt = {
                        key: fs.readFileSync(settings.httpsOpt.key),
                        cert: fs.readFileSync(settings.httpsOpt.cert)
                    }
                    server = require('https').createServer(opt, middleware(curRouter, settings, this))
                } else {
                    printer('Not all the parameters of the HTTPS protocol have been entered !', true, settings.log)
                }
            } else {
                printer(`The ${settings.protocol} protocol does not exist or is not supported by Rebst !`, true, settings.log)
            }
            server.listen(settings.port, settings.localIp, () => {
                console.log(`Rebst > The application runs on port ${settings.port}`.green)
                console.log(`Rebst > Version : ${version} | Author : Marius Brt | GitHub : https://github.com/Marius-brt/Rebst`.cyan)
                console.log(`Settings > Port : ${settings.port} | Output format : ${settings.format} | Version : ${settings.version} | Payload : ${JSON.stringify(settings.payload)} | Time : ${settings.time} | Console : ${settings.console}`.cyan)
                if(settings.encrypt.enabled == true && settings.encrypt.key == '') {
                    const encrypt = require('./middlewares/encrypt')
                    settings.encrypt.key = encrypt.key()
                    console.log(`Encryption key : ${settings.encrypt.key}`.yellow)
                }
                this.emit('started')
            }).on('error', (err) => {
                errorHandler(err, settings.port, settings.localIp, settings.log)
            })
            return curRouter
        } else {
            printer('Response format invalid !', true, settings.log)
        }
    }
    use(path) {
        middleware.use(path)
    }
    error(message = '', fatal = false) {
        printer(message, fatal, settings.log)
    }
    encryptKey() {
        const encrypt = require('./middlewares/encrypt')
        return encrypt.key()
    }
    needBody() {
        middleware.needBody()
    }
    get(url, callback) {
        // if(url.includes('https'))
        const https = require('https');
        https.get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
            data += chunk;
        });
        resp.on('end', () => {
            callback(data)
        });
        }).on("error", (err) => {
            console.log("Error: " + err.message);
        });
    }

    // Plugins
    cors(options = corsSettings) {
        middleware.enablePlugin(require('./middlewares/cors'), 'both', 'end', options, corsSettings)
    }
    bodyParser(options = bodyParserSettings) {
        middleware.enablePlugin(require('./middlewares/bodyParser'), 'both', 'start', options, bodyParserSettings)
    }
    resId(options = resIdSettings) {
        middleware.enableStaticPlugin('resId', options, resIdSettings)
    }
    encrypt(options = encryptSettings) {
        middleware.enableStaticPlugin('encrypt', options, encryptSettings)
    }
}

module.exports = new Server