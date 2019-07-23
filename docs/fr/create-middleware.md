# Créer un middleware
Pour créer votre middleware, il créer une `function` qui accepte au minimum deux paramètres : `req` et `res`. Cette `function` peut faire partie de votre script ou être externe à celui-ci

### Exemple : interne
```javascript
function monMiddleware(req, res) {
    // Mon code
}

app.use(monMiddleware)
```

### Exemple : externe

`middleware.js`
```javascript
module.exports = (req, res) => {
    // Mon code
}
```

`app.js`
```javascript
const monMiddleware = require('./middleware.js')
app.use(monMiddleware)
```