# Presentation
Rebst is a NodeJs framework that allows you to easily and quickly create a Rest API

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

# Advantages
* Very easy to use
* Middleware system
* Restfull
* Automatic errors 
* Console

# Author
I'm Marius, a 16-year-old French developer. I am the creator of `Rebst`

# License
You can read the license [here](https://github.com/Marius-brt/Rebst/blob/master/LICENSE)