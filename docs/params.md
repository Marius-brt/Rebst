# Params
Params allows you to retrieve the properties of your route. For example, in route `/user/:id`, the value of `id` is accessible with the command `req.params.id` or with `req.params['id']`

##### Example :
```javascript
app.get('/:id', (req, res) => {
    console.log(req.params.id)
})
```

To declare a new variable in your url, you must put `:` before the name of your variable.
<br>
**Example** : `/:category/:post`
<br>
<br>
You can put as many variables and "non-variables" as you want.
<br>
**Example** : `/meteo/:city/rain/:date`