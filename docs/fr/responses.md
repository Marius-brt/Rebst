# Réponses
Les réponses permettent d'envoyer du texte ou des données au client

## Send

`res.send(msg)`

`send` permet d'envoyer simplement une `String`

```javascript
res.send('Hello world !')
```

#### Résultat
```
Hello world !
```

## Rebst

`res.rebst(data)`

`rebst` permet d'envoyer une réponse formatée avec des données. 


```javascript
app.get('/', (req, res) => {
    res.rebst({
        status: 200,
        data: {
            id: 1,
            user: 'Marius'
        }
    })
})
```
> Chaque option est optionnelle

- status: `Int`
- data: `Object`

#### Résultat
```json
{
    "success": true,
    "message": "OK",
    "data": {
        "id": 1,
        "user": "Marius"
    }
}
```