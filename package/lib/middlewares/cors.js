module.exports = (req, res, settings) => {
    const headers = {
        'Access-Control-Allow-Origin': settings.origin,
        'Access-Control-Allow-Methods': settings.methods,
        'Access-Control-Max-Age': settings.maxAge,
        'Access-Control-Allow-Credentials': settings.credentials,
        'Access-Control-Expose-Headers': settings.exposedHeaders.join(','),
        'Access-Control-Allow-Headers': settings.allowedHeaders.join(',')
    }
    
    Object.keys(headers).forEach((key) => {
        res.setHeader(key, headers[key])
    });
    
    if (req.method === 'OPTIONS') {
        res.statusCode = 204
        res.end()
        return
    }
} 