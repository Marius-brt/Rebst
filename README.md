<p align="center">
    <a href="https://github.com/Marius-brt/Rebst">
        <img src="logo.png" alt="Logo" width="150">
    </a>
    <p align="center">
        <br />
        <a href="https://www.npmjs.com/package/rebst">
            <img src="https://img.shields.io/npm/v/rebst.svg">
        </a>
        <a href="https://www.npmjs.com/package/rebst">
            <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/min/rebst.svg?label=size">
        </a>
        <a href="https://github.com/Marius-brt/Rebst/blob/master/LICENSE">
            <img src="https://img.shields.io/github/license/Marius-brt/Rebst?color=blue">
        </a>
        <a href="https://github.com/Marius-brt/Rebst">
            <img src="https://img.shields.io/github/stars/Marius-brt/rebst.svg">
        </a>
        <br />
        <br />
        <br />
        A simple way to create Rest APIs easily and quickly
        <br />
        <a href="https://www.rebst.cf/"><strong>Explore the docs »</strong></a>
        <br />
        <br />
        <a href="https://github.com/Marius-brt/Rebst/blob/master/demo/index.js">View Demo</a>
        ·
        <a href="https://github.com/Marius-brt/Rebst/issues/1">Report Bug</a>
        ·
        <a href="https://github.com/Marius-brt/Rebst/issues/2">Request Feature</a>
    </p>
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
    <a href="https://discord.gg/VZVCcSg">
        Discord
    </a>
    ·
    <a href="https://www.npmjs.com/package/rebst">
        Npm
    </a>
    ·
    <a href="https://github.com/Marius-brt">
        GitHub
    </a>
</p>
