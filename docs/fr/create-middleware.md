# Créer un middleware
Pour créer votre middleware, il faut faire une `function` qui accept au minimum deux paramètres : `req` et `res`. Cette `function` peut faire partie de votre script ou faire partie d'un autre script

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