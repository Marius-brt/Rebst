module.exports = search

function search(routes, url) {
    var result = {url: '', params: {}}
    Object.keys(routes).forEach(key => {
        const parsedUrl = parse(key, url)
        if(parsedUrl.success) {
            result.params = parsedUrl.params
            result.url = key
        }
    })
    return result
}

function parse(model, url)  {
    const parsedModel = model.split('/')
    const parsedUrl = url.split('/')
    var result = {success: true, params: {}}
    if(parsedModel.length == parsedUrl.length) {
        for(i = 0; i < parsedModel.length; i++) {
            if(parsedModel[i].charAt(0) == ':') {
                if(parsedUrl[i] == "") {
                    result.success = false
                    break
                } else {
                    result.params[parsedModel[i].substr(1)] = parsedUrl[i]
                }
            } else {
                if(parsedModel[i] != parsedUrl[i]) {
                    result.success = false
                    break
                }
            }
        }
    } else {
        result.success = false
    }
    if(!result.success) result.params = {}
    return result
}