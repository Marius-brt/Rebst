const mcache = require('memory-cache')

module.exports = search

function search(routes, url) {
    var result = {url: '', params: {}}    
    for(var key in routes) {
        const parsedUrl = parse(key, url)
        if(parsedUrl.match) {
            result.params = parsedUrl.params
            result.url = key
            break
        }
    }    
    return result
}

function parse(model, url) {
    const modelParsed = model.split('/').filter((e) => {
        return e.replace(/(\r\n|\n|\r)/gm,"")
    })
    let modelRes = mcache.get(model)
    var modelResult = {
        anyParam: {
            activate: false,
            index: 0
        },
        query: []
    }
    if(modelRes) {
        modelResult = modelRes
    } else {
        for(i = 0; i < modelParsed.length; i++) {
            modelResult['anyParam'].activate = /\[[^\]]*]/g.test(modelParsed[i]) && i == modelParsed.length - 1
            if(modelResult['anyParam'].activate) modelResult['anyParam'].index = i
            modelResult['query'].push({
                name: modelParsed[i].replace(/[\[\]']+/g,'').replace(/^:/, ''),
                type: modelParsed[i].charAt(0) == ':' ? 'param' : 'path'
            })
        }
        mcache.put(model, modelResult)
    }

    if(url.includes('?')) {
        var result = {
            match: true,
            params: {}
        }
        var res = mcache.get(model+url)
        if(res) {
            return res
        } else {
            const urlParsed = url.replace('?', '/').replace(/&/g, '/').split('/').filter((e) => {
                return e.replace(/(\r\n|\n|\r)/gm,"")
            })
            if(urlParsed.length == modelParsed.length || modelResult.anyParam.activate) {
                var anyParamActivate = false
                const Lenght = urlParsed.length >= modelParsed.length ? urlParsed.length : modelParsed.length
                for(i = 0; i < Lenght; i++) {
                    if(!anyParamActivate) {
                        if(modelResult.anyParam.activate && modelResult.query[modelResult.anyParam.index].name == "" && modelResult.anyParam.index == 0) {
                            anyParamActivate = true
                        } else {
                            if(modelResult.anyParam.activate && modelResult.anyParam.index == i && modelResult.query[modelResult.anyParam.index].name == urlParsed[i]) {
                                anyParamActivate = true
                            }
                        }
                    }
                    if(anyParamActivate) {
                        if(modelResult.anyParam.index != i || modelResult.query[modelResult.anyParam.index].name == "" && urlParsed[i].includes('=')) {
                            const data = urlParsed[i].split('=')
                            result.params[data[0]] = data[1]
                        }                        
                    } else {
                        if(modelResult.query[i].type == 'param') {
                            const data = urlParsed[i].split('=')
                            if(modelParsed[i].substr(1) == data[0]) {
                                result.params[data[0]] = data[1]
                            } else {
                                result.match = false
                                mcache.put(model+url, result)
                                return result
                            }
                        } else {
                            if(modelParsed[i] != urlParsed[i]) {
                                result.match = false
                                mcache.put(model+url, result)
                                return result
                            }
                        }
                    }
                }
            } else {
                result.match = false
                mcache.put(model+url, result)
                return result
            }
            mcache.put(model+url, result)
            return result
        }
    } else {        
        var result = {
            match: true,
            params: {}
        }   
        var res = mcache.get(model+url)
        if(res) {
            return res
        } else {
            const urlParsed = url.split('/').filter((e) => {
                return e.replace(/(\r\n|\n|\r)/gm,"")
            })     
            if(modelParsed.length == urlParsed.length || modelResult.anyParam.activate) {
                var anyParamActivate = false
                const Lenght = urlParsed.length >= modelParsed.length ? urlParsed.length : modelParsed.length
                for(i = 0; i < Lenght; i++) {
                    if(!anyParamActivate) {
                        if(modelResult.anyParam.activate && modelResult.query[modelResult.anyParam.index].name == "" && modelResult.anyParam.index == 0) {
                            anyParamActivate = true
                        } else {
                            if(modelResult.anyParam.activate && modelResult.anyParam.index == i && modelResult.query[modelResult.anyParam.index].name == urlParsed[i]) {
                                anyParamActivate = true
                            }
                        }
                    }
                    if(anyParamActivate) {
                        if(modelResult.anyParam.index != i || modelResult.query[modelResult.anyParam.index].name == "") result.params[Object.keys(result.params).length === 0 ? 0 : Object.keys(result.params).length] = urlParsed[i]
                    } else {
                        if(modelResult.query[i].type == 'param') {
                            if(urlParsed[i] == "") {
                                result.match = false
                                mcache.put(model+url, result)
                                return result                    
                            } else {
                                result.params[modelParsed[i].substr(1)] = urlParsed[i]
                            }
                        } else {
                            if(modelParsed[i] != urlParsed[i]) {
                                result.match = false
                                mcache.put(model+url, result)
                                return result
                            }
                        }
                    }
                }
            } else {
                result.match = false
                mcache.put(model+url, result)
                return result
            }
            mcache.put(model+url, result)
            return result
        }
    }
}