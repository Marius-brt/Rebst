> An incredible NodeJs package to create Restfull APIs easily and quickly

## Example

**API**

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

**Response of the request to the url** `localhost:3000`
```json
{
    "success": true,
    "message": "OK",
    "data": {
        "id": 1,
        "username": "username"
    }
}
```

## Donate

If you love Rebst and want to support the project, you can make a donation [here](https://www.patreon.com/mariusbrt)

## License

You can read the license [here](https://github.com/Marius-brt/Rebst/blob/master/LICENSE)