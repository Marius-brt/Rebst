# Présentation
Rebst est un framework NodeJs qui vous permet de créer facilement et rapidement une API Rest

```javascript
const rebst = require('rebst')
const app = rebst.init()

app.get('/', (req, res) => {
    res.rebst({
        status: 200,
        data: { 
            id: 1,
            username: 'username'
        }
    })
})
```

# Avantages
* Facile d'utilisation
* Système de middleware
* Restfull
* Erreurs automatiques 
* Console

# License
Vous pouvez lire la license [ici](https://github.com/Marius-brt/Rebst/blob/master/LICENSE)