# Routing
The routes indicate what the server responds according to the url of the request. To do this, use the command `app.maMethode(url, callback)`

List of methods supported by Rebst :
* GET
* POST
* PUT
* PATCH
* DELETE
* COPY
* HEAD
* OPTIONS
* LINK
* UNLINK
* PURGE
* LOCK
* UNLOCK
* PROPFIND
* VIEW

#### Example :
```javascript
app.get('/', (req, res) => {
    res.send('Hello world !')
})
```

In this example, if the requested url is at the root of your API and the method is **GET** then the callback is executed (here, the server sends `Hello world !` to the client)
