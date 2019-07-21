<p align="center">
  <a href="https://github.com/Marius-brt/Rebst">
    <img src="logo.png" alt="Logo" width="150">
  </a>

  <p align="center">
    <br />
    <br />
    A simple way to create Rest APIs easily and quickly
    <br />
    <a href="https://www.rebst.cf/" target="_blank"><strong>Explore the docs »</strong></a>
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