# Response

> The `res` object represents the HTTP response that an Rebst app sends when it gets an HTTP request.

## Methods

### res.rebst()
> res.rebst(`Object`)

This method defines the files that the client can access with a `get` request

#### Parameters :
| Parameters |    Type   |                                Description                                | Default |
|:----------:|:---------:|:-------------------------------------------------------------------------:|:-------:|
|   status   |   `Int`   |                      The HTTP status of the response                      |   200   |
|    data    |  `Object` |                          The data of the response                         |   null  |
|   headers  |  `Object` |                  To add specific headers to this response                 |   null  |
|  bpEncrypt | `Boolean` | If you use the `encrypt` plugin, this allows you to bypass the encryption |  false  |

#### Example :
```javascript
res.rebst({
    status: 200,
    data: {
        ...
    },
    headers: {
        'Header': 'Value'
    },
    bpEncrypt: true
})
```

#### Result :
```json
{
    "success": true,
    "message": "OK",
    "data": {
        ...
    }
}
```

### res.send()

> res.send(message, bpEncrypt)

This method allows you to send a simple message to the customer

#### Arguments :
| Arguments |    Type   |                                Description                                | Default |
|:---------:|:---------:|:-------------------------------------------------------------------------:|:-------:|
|  message  |  `String` |                                The message                                |    ''   |
| bpEncrypt | `Boolean` | If you use the `encrypt` plugin, this allows you to bypass the encryption |  false  |

#### Example :
```javascript
res.send('Hello world !', true)
```

#### Result :
```
Hello world ! 
```

### res.render()
> res.render(`Object`)

This method allows you to send html code to the client

#### Parameters :
| Parameters |    Type   |                                Description                                | Default |
|:----------:|:---------:|:-------------------------------------------------------------------------:|:-------:|
|   status   |   `Int`   |                      The HTTP status of the response                      |   200   |
|    html    |  `String` |                               The html code                               |    ''   |
|  bpEncrypt | `Boolean` | If you use the `encrypt` plugin, this allows you to bypass the encryption |  false  |

#### Example :
```javascript
res.render({
    status: 200,
    html: '<h1>Hello World !</h1>',
    bpEncrypt: true
})
```

#### Result :
```html
<h1>Hello World !</h1>
```

### res.redirect()

> res.redirect(url, status)

This method allows you to redirect the request to another url

#### Arguments :
| Arguments |   Type   |                 Description                | Default |
|:---------:|:--------:|:------------------------------------------:|:-------:|
|    url    | `String` | The url to which the request is redirected |    ''   |
|   status  |   `Int`  |       The HTTP status of the response      |   302   |

#### Example :
```javascript
res.redirect('https://google.com', 302)
```