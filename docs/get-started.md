# Get Started
> Everything that is in this documentation is in the script of your application. Here we will call it `index.js`

## Hello World

In this example, we will create a simple API that responds `Hello World` when we make a `get` request.

1. Import Rebst and initialize your application
```javascript
const rebst = require('rebst')
const app = rebst.init()
```

2. Add a `get` route with the root of your application as the path
```javascript
app.get('/', (req, res) => {
    res.send('Hello World !')
})
```

## Running Locally

To launch your application, use the command below
```bash
$ node index.js
```
Now your application is running on port `3000`. You can access it with the url `localhost:3000`

## Running with nodemon

You can use [nodemon](https://www.npmjs.com/package/nodemon) to have your application automatically restart as soon as you save a change

1. Install nodemon with the command below
```bash
$ npm install nodemon --save-dev
```

2. Add the command `start` in `package.json`
```json
"scripts": {
    "start": "nodemon index.js"
}
```

3. Run your application with the command below
```bash
$ npm start
```
Now your application is running on port `3000`. You can access it with the url `localhost:3000`