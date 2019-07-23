# Writing middleware
To create your middleware, you must make a `function` that accepts at least two parameters : `req` and `res`. This `function` can be part of your script or part of another script

### Example : internal
```javascript
function myMiddleware(req, res) {
    // My code
}

app.use(myMiddleware)
```

### Example : external

`middleware.js`
```javascript
module.exports = (req, res) => {
    // My code
}
```

`app.js`
```javascript
const myMiddleware = require('./middleware.js')
app.use(myMiddleware)
```