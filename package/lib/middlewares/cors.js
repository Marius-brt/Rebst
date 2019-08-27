module.exports = (req, res, settings) => {
    const headers = {
        'Access-Control-Allow-Origin': settings.origin != '' ? settings.origin : null,
        'Access-Control-Allow-Methods': settings.methods != '' ? settings.methods : null,
        'Access-Control-Max-Age': settings.maxAge || 0,
        'Access-Control-Allow-Credentials': settings.credentials || false,
        'Access-Control-Expose-Headers': settings.exposedHeaders.length > 0 ? settings.exposedHeaders.join(',') : null,
        'Access-Control-Allow-Headers': settings.allowedHeaders.length > 0 ? settings.allowedHeaders.join(',') : null
    }
    
    Object.keys(headers).forEach((key) => {
        if(headers[key] != null) {
            res.setHeader(key, headers[key])
        }
    });
    
    if (req.method === 'OPTIONS') {
        res.statusCode = 204
        res.end()
        return
    }
} 