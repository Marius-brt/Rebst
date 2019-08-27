# Basic Routing
Routing is used to determine how the application responds to the customer's request at a particular endpoint, which is a `URI` (or path) and an HTTP `method`.
Route has the following structure :
```javascript
app.METHOD(URI, CALLBACK)
```

#### Examples :
* With a `Get` method and with the `/api/v1/users` path
```javascript
app.get('/api/v1/users', (req, res) => {
    res.send('GET method')
})
```
* With a `Post` method and with the `/api/v1/users` path
```javascript
app.post('/api/v1/users', (req, res) => {
    res.send('POST method')
})
```
* With a `Put` method and with the `/api/v1/users` path
```javascript
app.put('/api/v1/users', (req, res) => {
    res.send('PUT method')
})
```