# Settings
You can add options to Rebst with `rebst.init()`

> Each option is optional

```javascript
const app = rebst.init({
    console: true,
    format: 'xml'
})
```

## Port

- Type: `Int`
- Default: `3000`

Define the port of your API

```javascript
rebst.init({
    port: 3000
})
```

## Version

- Type: `String`
- Default: `null`

Define the version of your API. This is displayed in all responses

```javascript
rebst.init({
    version: '1.0.0'
})
```

## Time

- Type: `Boolean`
- Default: `false`

Displays whether or not the time the response was sent (in relation to the time zone of the server)

```javascript
rebst.init({
    time: true
})
```

## Format

- Type: `String`
- Default: `json`

Define the format of your answer. Supported formats are json and xml

```javascript
rebst.init({
    format: 'xml'
})
```

## Payload

- Type: `Object`
- Default: `null`

Payload allows you to add data that will be sent in all responses

```javascript
rebst.init({
    payload: {
        url: 'www.example.com'
    }
})
```

## Console

- Type: `Boolean`
- Default: `true`

Enable or not the console. When it is activated, a report of each response sent is displayed in the console. useful to debug your API

```javascript
rebst.init({
    console: true
})
```