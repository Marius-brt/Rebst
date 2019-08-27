module.exports = (res, settings) => {
    if(settings.enabled) {
        const id = Date.now()
        const type = settings.type.toLowerCase()
        if(type == 'header' || type == 'both') {
            res.setHeader(settings.headerName, id)
        }
        return id
    } else {
        return null
    }
}