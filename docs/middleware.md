# Middleware
Middleware is a `function` that has access to the `req` and `res` response. They can interact with them. An example of middleware : a `function` that checks the client's API key and sends an error message if it is not valid. To use middleware, use the command `rebst.use(function)`. It is advisable to import your middleware before using the `routes`

### Example
```javascript
const auth = require('./authChecker.js')
rebst.use(auth)
```