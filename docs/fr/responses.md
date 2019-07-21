# Réponses
Les réponses permettent d'envoyer du texte ou des données au client

## Send

`res.send(msg)`

`send` permet d'envoyer simplement une `String`

```javascript
res.send('Hello world !')
```

#### Resultat
```
Hello world !
```

## Rebst

`res.rebst(data)`

`rebst` permet d'envoyer une réponse formater avec des données. 

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

- status: `Int`
- data: `Object`

#### Resultat
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