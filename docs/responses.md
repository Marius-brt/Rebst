# Responses
Responses are used to send text or data to the customer

## Send

`res.send(msg)`

`send` allows you to simply send a `String`

```javascript
res.send('Hello world !')
```

#### Result
```
Hello world !
```

## Rebst

`res.rebst(data)`

`rebst` allows you to send a formatted response with data. 

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

#### Result
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