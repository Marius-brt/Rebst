# Middleware
Les middleware sont des `function` qui ont accès à la requête `req` et à la réponse `res`. Ils peuvent interagir avec ceux-ci. Un exemple de middleware : une `function` qui vérifie la clé d'Api du client et qui envoie un message d'erreur si celle-ci n'est pas valide. Pour utiliser un middleware, utilisez la commande `rebst.use(function)`. Il est recommandé d'importer vos middleware avant d'utiliser les `routes`

### Exemple
```javascript
const auth = require('./authChecker.js')
rebst.use(auth)
```