const http = require('http')
const colors = require('colors')
const { version } = require('../package.json')

const middleware = require('./middleware')
const router = require('./router')
const errorHandler = require('./errorHandler')

var settings = {
    port: 3000,
    version: null,
    payload: null,
    time: false,
    format: 'json',
    console: true
}

exports.init = (params = {}) => {
    if(params != null) {
        Object.keys(params).forEach(key => {
            if(key in settings) settings[key] = params[key]
        })
    }
    if(settings.format.toLowerCase() == 'json' || settings.format.toLowerCase() == 'xml') {
        const curRouter = new router
        http.createServer(middleware(curRouter, settings)).listen(settings.port, () => {
            console.log(`Rebst > Server is running on port ${settings.port}`.green)
            console.log(`Rebst > Version : ${version} | Author : Marius Brt | GitHub : https://github.com/Marius-brt/Rebst`.cyan)
            console.log(`Settings > Port : ${settings.port} | Response format : ${settings.format} | Version : ${settings.version} | Payload : ${JSON.stringify(settings.payload)} | Console : ${settings.console}`.cyan)
        }).on('error', (err) => {
            errorHandler(err, settings.port)
        })
        return curRouter
    } else {
        console.log(`Rebst > Response format invalid !`.red)
    }
}

exports.use = middleware.use