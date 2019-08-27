# Rebst()
> The `rebst()` function is a top-level function exported by the Rebst module.

## Events

### started
The started event is fired when the application has been successfully started
```javascript
rebst.on('started', () => {
    console.log('Application started successfully !')
})
```

### received
The received event is fired when a new HTTP request has been received
```javascript
rebst.on('received', () => {
    console.log('New request received')
})
```

### sended
The event is fired when a response has been sent to a client
```javascript
rebst.on('started', () => {
    console.log('Response sent !')
})
```

## Methods

### rebst.init()
> rebst.init(settings)

This method is used to create an application

#### Arguments :
| Arguments | Type     |                               Description                              | Default |
|:---------:|----------|:----------------------------------------------------------------------:|---------|
|  settings | `Object` | The parameters of the application. See the list of parameters [here]() |   null  |

#### Example :
```javascript
const app = rebst.init({
    port: 4000
})
```

### rebst.use()
> rebst.init(path)

This method allows you to add middleware to Rebst

#### Arguments :
| Arguments | Type     |                                  Description                                  | Default |
|:---------:|----------|:-----------------------------------------------------------------------------:|---------|
|    path   | `String` | The path to the main script of your middleware. All about middleware [here]() |    ''   |

#### Example :
```javascript
const myMiddleware = require('./myMiddleware.js')
rebst.use(myMiddleware)
```

### rebst.err()
> rebst.init(error, fatal)

This method allows you to display an error in the console. This error may be fatal or not and therefore stop your application or not

#### Arguments :
| Arguments | Type      |                                  Description                                  | Default |
|:---------:|-----------|:-----------------------------------------------------------------------------:|---------|
|   error   | `String`  |               The message that will be displayed in the console               |    ''   |
| fatal     | `Boolean` | When this option is enabled, the application stops after displaying the error |  false  |

#### Example :
```javascript
rebst.err('Invalid name !', true)
```