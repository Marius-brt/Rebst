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
    <a href="https://github.com/Marius-brt">
        <img src="https://img.shields.io/github/followers/Marius-brt.svg">
    </a>
    <a href="https://github.com/Marius-brt/Rebst">
        <img src="https://img.shields.io/github/stars/Marius-brt/rebst.svg">
    </a>
</p>

# Example
A response example from the [demo](https://github.com/Marius-brt/Rebst/blob/master/demo/index.js)

```json
{
    "success": true,
    "message": "OK",
    "version": "1.0.0",
    "data": {
        "id": 1,
        "user": "name",
        "email": "user@example.com"
    }
}
```

# Features

* Restfull response
* Automatic error response
* Console
* Payload system
* Response format
* Lightweight : ~8 Ko

# Installation

For installation, install the npm package in your project
```bash
$ npm install rebst
```

# Getting Started
To initialize Rebst, simply add this line in the script where you want to use Rebst

```javascript
const rebst = require('rebst')
expressApp.use(rebst)
```


# Options

You can add options to Rebst. These options will be applied to all responses in this script. Each of them are optional

PS : the documentation use Express as server but you can use an other framework

```javascript
rebst.options({
    version: '1.0.0',
    format: 'json' or 'xml',
    payload: {
        text: 'Hello world'
    },
    headers: {
        'Allow-Control-From-Origin': '*'
    }
})
```

- **version** : The version of you API
- **format** : The format of your response (json by default)
- **payload** : Here you can add everything you want (example : the date)
- **headers** : This is where you put the headers of your response for each of them

# Send a Response
Below you can see the simplest form of response with Rebst. It only returns a status of 200 and the message 'Ok'

```javascript
expressApp.get('/', function(req, res) {
    rebst.send(res)
})
```

Result :
```json
{
    "success": true,
    "message": "OK"
}
```


**Now** you can add options to your response. Each of them are optional :

```javascript
expressApp.get('/', function (req, res) {
  rebst.send(res, {
      status: 200,
      data: { 
          id: 1,
          username: 'username'
      },
      headers: {
        'Allow-Control-From-Origin': '*'
    }
  })
})
```

- **status** : It's the status code. It defined to 200 by default
- **data** : This is where you put your data as an Object
- **headers** : This is where you put the headers of your response. This will be applied only to this response


# Redirect
Redirect allows you to redirect the user to another web page

```javascript
expressApp.get('/', function (req, res) {
  rebst.redirect(res, 'https://www.yourwebsite.com/')
})
```


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