module.exports = (res, settings) => {
    if(settings.enabled) {
        switch(settings.type.toLowerCase()) {
            case 'body':
                return Date.now()
            case 'header':
                res.setHeader(settings.headerName, Date.now())
                return null
            case 'both':
                const id = Date.now()
                res.setHeader(settings.headerName, id)
                return id
        }
    } else {
        return null
    }
}