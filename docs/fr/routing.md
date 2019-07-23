# Routing
Les routes indiquent ce que le serveur répond en fonction de l'url de la requête. Pour cela, utilisez la commande `app.maMethode(url, callback)`

Liste des méthodes supportées par Rebst :
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

#### Exemple :
```javascript
app.get('/', (req, res) => {
    res.send('Hello world !')
})
```

Dans cet exemple, si l'url de la requête est à la racine de votre API et que la méthode est **GET** alors le callback est exécuté (ici, le serveur envoie `Hello world !` au client)
