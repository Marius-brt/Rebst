# Params
Params vous permet de récupérer les propriétés de votre route. Par exemple, dans la route `/user/:id`, la valeur de `id` est accessible avec la commande `req.params.id` ou bien avec `req.params['id']`

#### Exemple :
```javascript
app.get('/:id', (req, res) => {
    console.log(req.params.id)
})
```

Pour déclarer une nouvelle variable dans votre url, il faut mettre `:` devant le nom de votre variable.
<br>
**Exemple** : `/:category/:post`
<br>
<br>
Vous pouvez mettre autant de variable et de "non variable" que vous souhaitez.
<br>
**Exemple** : `/meteo/:city/rain/:date`