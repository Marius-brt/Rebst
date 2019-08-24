module.exports = search

function search(routes, url) {
    var result = {url: '', params: {}}    
    for(var key in routes) {
        const parsedUrl = parse(key, url)
        if(parsedUrl.success) {
            result.params = parsedUrl.params
            result.url = key
            break            
        }
    }    
    return result
}

function parse(model, url) {
    if(url.includes('/?')) {
        var result = {success: true, params: {}}
        var path = url.replace('/?', '/')
        const parsedModel = model.split('/')
        var parsedUrl = path.split(/&|\//)
        if(parsedModel.length == parsedUrl.length) {
            for(i = 0; i < parsedModel.length; i++) {                
                if(parsedModel[i].charAt(0) == '|' && parsedModel[i][parsedModel[i].length - 1] == '|' && parsedUrl[i] == parsedModel[i].replace(/\|/g, '')) {
                    return result
                } else if(parsedModel[i].charAt(0) == ':') {
                    const data = parsedUrl[i].split('=')
                    if(parsedModel[i].substr(1) == data[0]) {
                        result.params[data[0]] = data[1]
                    } else {
                        result.success = false
                        return result
                    }
                } else {
                    if(parsedModel[i] != parsedUrl[i]) {
                        result.success = false
                        return result
                    }
                }
            }
        } else {
            result.success = false
            return result
        }
        return result
    } else {
        const parsedModel = model.split('/')
        const parsedUrl = url.split('/')
        var result = {success: true, params: {}}
        if(parsedModel.length == parsedUrl.length) {
            for(i = 0; i < parsedModel.length; i++) {
                if(parsedModel[i].charAt(0) == '|' && parsedModel[i][parsedModel[i].length - 1] == '|' && parsedUrl[i] == parsedModel[i].replace(/\|/g, '')) {
                    return result
                } else if(parsedModel[i].charAt(0) == ':') {
                    if(parsedUrl[i] == "") {
                        result.success = false
                        return result                    
                    } else {
                        result.params[parsedModel[i].substr(1)] = parsedUrl[i]
                    }
                } else {
                    if(parsedModel[i] != parsedUrl[i]) {
                        result.success = false
                        return result
                    }
                }
            }
        } else {
            result.success = false
            return result
        }
        return result
    }
}