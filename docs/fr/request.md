# Request
`req` représent la requête HTTP. Sur cette page vous trouverez toute les propriétés, variables et `function` de la requête.

#### Exemple :
```javascript
app.get('/', (req, res) => {
    console.log(req.path)
})
```

## Ip

- Type: `String`

Permet de récupérer l'adresse IP de votre client. En local, cette IP sera `::1`

```javascript
req.ip
```

## Host

- Type: `String`

Permet de récupérer le nom de domaine de la requête

```javascript
req.ip
```