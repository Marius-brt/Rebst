# Options
Vous pouvez ajouter des options à Rebst avec `rebst.init()`

> Chaque option est optionnelle

```javascript
const app = rebst.init({
    console: true,
    format: 'xml'
})
```

## Port

- Type: `Int`
- Défaut: `3000`

Définit le port de votre API

```javascript
rebst.init({
    port: 3000
})
```

## Version

- Type: `String`
- Défaut: `null`

Définit la version de votre API. Celle-ci est affichée dans toutes les réponses de votre API

```javascript
rebst.init({
    version: '1.0.0'
})
```

## Time

- Type: `Boolean`
- Défaut: `false`

Affiche ou non l'heure à laquelle la réponse a été envoyée (par rapport au fuseau horaire de votre serveur)

```javascript
rebst.init({
    time: true
})
```

## Format

- Type: `String`
- Défaut: `json`

Définit le format de votre réponse. Les formats supportés sont le json et le xml

```javascript
rebst.init({
    format: 'xml'
})
```

## Payload

- Type: `Object`
- Défaut: `null`

Payload vous permet d'ajouter des données qui seront envoyées dans toutes les réponses

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

Active ou non la console. Lorsqu'elle est activée, un bilan de chaque réponse est envoyé et s'affiche dans la console. Utile pour débugger votre API

```javascript
rebst.init({
    console: true
})
```