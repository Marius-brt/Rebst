<p align="center">
  <a href="https://github.com/Marius-brt/Rebst">
    <img src="https://i.ibb.co/zmPc37t/logo.png" alt="Logo" width="150">
  </a>

  <p align="center">
    <br />
    <br />
    A simple way to create standardized responses for API Rest
    <br />
    <a href="#Installation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/Marius-brt/Rebst/blob/master/demo/index.js">View Demo</a>
    ·
    <a href="https://github.com/Marius-brt/Rebst/issues/1">Report Bug</a>
    ·
    <a href="https://github.com/Marius-brt/Rebst/issues/2">Request Feature</a>
  </p>
</p>

<p align="center" style="margin-bottom: 50px">
    <a href="https://www.npmjs.com/package/rebst">
        <img src="https://img.shields.io/npm/v/rebst.svg">
    </a>
    <a href="https://www.npmjs.com/package/rebst">
        <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/rebst.svg?label=size">
    </a>
    <a href="https://github.com/Marius-brt">
        <img src="https://img.shields.io/github/followers/Marius-brt.svg">
    </a>
    <a href="https://github.com/Marius-brt/Rebst">
        <img src="https://img.shields.io/github/stars/Marius-brt/rebst.svg">
    </a>
</p>

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

# Features
    
* Super easy to use
* Middleware
* Restfull
* Automatic error response
* Console

# Contents

* [Installation](#Installation)
* [Initialize](#Initialize)
    * [Options](#Options)
* [Routing](#Routing)
    * [Response](#Response)
    * [Params](#Params)
* [Middleware](#Middleware)
    * [Writing Middleware](#Writing-Middleware)
* [License](#License)

# Installation

For installation, install the npm package in your project
```bash
$ npm install rebst
```

# Initialize
To initialize Rebst, simply add this line in your app

```javascript
const rebst = require('rebst')
const app = rebst.init()
```


# Options

You can add options to Rebst. Each of them are optional


```javascript
const app = rebst.init({
    port: 3000,
    version: '1.0.0',
    time: true,
    format: 'json' or 'xml',
    payload: {
        
    },
    console: true
})
```

- **port** : The port of your API (3000 by default) **[int]**
- **version** : The version of your API **[string]**
- **time** : Show the time of the response **[boolean]**
- **format** : The format of your response (json by default) **[string]**
- **payload** : Here you can add everything you want **[object]**
- **console** : Enable or disable the console **[boolean]**

# Routing
**Routing** indicates what the server responds according to the url of the request. To do this, use the command `app.mymethod(url, callback)`

Example :
```javascript
app.get('/', (req, res) => {
    res.send('Hello world !')
})
```
In this example, if the url is at the **root** of the API and the method is **GET**, then the callback script is executed (here the server sends '_Hello world_' to the client)

List of methods supported by Rebst :
* GET
* POST
* PUT
* PATCH
* DELETE
* COPY
* HEAD
* OPTIONS
* LINK
* UNLINK
* PURGE
* LOCK
* UNLOCK
* PROPFIND
* VIEW

# Response
Below you can see the simplest form of response with Rebst

```javascript
app.get('/', (req, res) => {
    res.send('Hello world !')
})
```

Result :
```
Hello world !
```

**Now** you can make more complex responses :

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

- **status** : It's the status code of the response (200 by default) **[int]**
- **data** : This is where you put your data **[object]**

Result :
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

# Params
Under development

# Middleware
To use a new middleware, use the command `rebst.use()`

```javascript
rebst.use(myMiddleware)
```

# Writing Middleware
To create a new middleware, simply follow these instructions :

1. Create a `.js` file
2. Copy these few lines :
    ```javascript
    module.exports = (req, res) => {
        // Your code
    }
    ```
3. Enable middleware :
    ```javascript
    const myMiddleware = require('./myMiddleware')
    rebst.use(myMiddleware)
    ```

That it !

# License
You can read the license [here](https://github.com/Marius-brt/Rebst/blob/master/LICENSE)
<p align="center">
    <br/>
    <br/>
    <a href="https://twitter.com/mariusbrouty">
        Twitter
    </a>
    ·
    <a href="https://dribbble.com/MariusBrt">
        Dribbble
    </a>
    ·
    <a href="https://www.instagram.com/marius.brt/">
        Instagram
    </a>
    ·
    <a href="https://www.behance.net/mariusbrou0083">
        Behance
    </a>
    ·
    <a href="https://github.com/Marius-brt">
        GitHub
    </a>
</p>