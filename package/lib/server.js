const http = require('http')
const colors = require('colors')
const fs = require('fs')

const middleware = require('./middleware')
const router = require('./router')
const errorHandler = require('./errorHandler')

settings = {
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
    const curRouter = new router
    const server = http.createServer(middleware(curRouter, settings)).listen(settings.port, () => {
        console.log(`Rebst > Server is running on port ${settings.port}`.green)
        console.log(`Rebst > Version : 1.1.1 | Author : Marius Brt | GitHub : https://github.com/Marius-brt/Rebst`.cyan)
        console.log(`Settings > Port : ${params.port} | Response format : ${settings.format} | Version : ${settings.version} | Payload : ${JSON.stringify(settings.payload)} | Console : ${settings.console}`.cyan)
    }).on('error', (err) => {
        errorHandler(err, settings.port)
    })
    return curRouter
}

exports.use = middleware.use