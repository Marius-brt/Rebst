# Request

> The `req` object represents the HTTP request

## Properties

### req.ip
The IP address of the client
```javascript
console.log(req.ip)
// => "127.0.0.1"
```

### req.host
Returns the host name
```javascript
console.log(req.host)
// => "localhost:3000"
```

### req.path
Returns the url of the request
```javascript
console.log(req.path)
// => "localhost:3000/api/v1/users"
```