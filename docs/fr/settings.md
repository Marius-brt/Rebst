# Options
Vous pouvez ajouter des options à Rebst avec `rebst.init()`

```javascript
const app = rebst.init({
    console: true,
    format: 'xml'
})
```

## Port

- Type: `Int`
- Défaut: `3000`

Définie le port de votre API

```javascript
rebst.init({
    port: 3000
})
```

## Version

- Type: `String`
- Défaut: `null`

Définie la version de votre API. Celle-ci est affiché dans toutes les réponses

```javascript
rebst.init({
    version: '1.0.0'
})
```

## Time

- Type: `Boolean`
- Défaut: `false`

Affiche ou non l'heure où la réponse à été envoyé (par rapport au fuseau horaire du serveur)

```javascript
rebst.init({
    time: true
})
```

## Format

- Type: `String`
- Défaut: `json`

Définie le format de votre réponse. Les formats supportés sont le json et le xml

```javascript
rebst.init({
    format: 'xml'
})
```

## Payload

- Type: `Object`
- Défaut: `null`

Payload vous permet d'ajouter des données qui seront envoyé dans toutes les réponses

```javascript
rebst.init({
    payload: {
        url: 'www.example.com'
    }
})
```

## Console

- Type: `Boolean`
- Défaut: `true`

Active ou non la console. Lors ce quelle est activé, un bilan de chaques réponses envoyé est affiché dans la console. utile pour débugger votre API

```javascript
rebst.init({
    console: true
})
```