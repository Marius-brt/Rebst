# Application

> The `app` object represents a Rebst application

## Methods

### app.static()
> app.static(path)

This method defines the files that the client can access with a `get` request

#### Arguments :
| Arguments | Type     |          Description         | Default |
|:---------:|----------|:----------------------------:|---------|
|    path   | `String` | The path to a folder or file |    ''   |

#### Example :
```javascript
app.static('/sources')
```

### app.METHOD()
> app.METHOD(uri, callback)

Routes an HTTP request, where METHOD is the HTTP method of the request. For more information, please read the [basic routing](basic-routing.md)

#### Arguments :
| Arguments | Type     |          Description         | Default |
|:---------:|----------|:----------------------------:|---------|
|    path   | `String` | The path to a folder or file |    ''   |

#### Example :
```javascript
app.get('/', (req, res) => {
    res.send('Ok')
})
```