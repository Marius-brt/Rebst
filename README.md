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

# Installation

For installation, install the npm package in your project
```bash
$ npm install rebst
```

# Features

* Restfull response
* Automatic error response
* Payload system
* Lightweight : ~100 Ko

# Getting Started
To initialize Rebst, simply add this line in the script where you want to use Rebst

```javascript
const rebst = require('rebst')
```


# Options

You can add options to Rebst. Each of them are optional

```javascript
rebst.options({
    version: '1.0.0', // The version of you API
    format: 'json' or 'xml', // The format of your response (json by default)
    payload: {
        // Here you can add everything you want
    },
    headers: {
        'HeaderName': 'value',
         ...
        // Response headers
    },
    console: true // Sends information about each response to the console (false by default)
})
```

# Send a Response

```javascript
app.get('/', function (req, res) {
  rebst.send(res, {
      status: 200, // 200 by default
      data: { 
          // Enter your data here (the data is not sent if the status is not positive)
      },
      headers: {
        'HeaderName': 'value',
         ...
        // Response headers (optional)
    }
  })
})
```

# Redirect

```javascript
app.get('/', function (req, res) {
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