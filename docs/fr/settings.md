# Options
Vous pouvez ajouter des options à Rebst dans les paramètres de la fonction `rebst.init()` sous forme d'Objet

#### Exemple
```javascript
const app = rebst.init({
    console: true,
    format: 'xml'
})
```

## Serveur

### Port

- Type: `Int`
- Défaut: `3000`

Définit le port de votre API

```javascript
rebst.init({
    port: 3000
})
```

### Local IP

- Type: `String`
- Défaut: `localhost`

Définit l'adresse IP locale de votre application. Pratique pour la tester avec tous les appareils connecter au même réseaux.
Si vous utilisez ce paramètre, veuillez mettre l'adresse IP locale de la machine sur laquel tourne votre application

```javascript
rebst.init({
    localIp: '192.168.0.20'
})
```

### Protocol

- Type: `String`
- Défaut: `http`

Définit le protocole de votre application. Les protocoles supportés par Rebst sont `HTTP` et `HTTPS`. Si vous utilisez le protocole `HTTPS`, veuillez égalemment référencez vos certificats
avec l'option [httpsOpt](#Https-Opt)

```javascript
rebst.init({
    protocol: 'https'
})
```

### Https Opt

- Type: `Object`
- Défaut: `null`

Permet de référencer la clé et le certificat pour le protocole `HTTPS`

```javascript
rebst.init({
    httpsOpt: {
        key: 'https/key.pem',
        cert: 'https/cert.pem'
    }
})
```

### Blacklist

- Type: `Array`
- Défaut: `null`

Définit les IP qui n'ont pas le droits d'accéder à votre application et leurs renvoie une erreur 403

```javascript
rebst.init({
    blacklist: ['127.0.0.1']
})
```

## Réponse

### Version

- Type: `String`
- Défaut: `null`

Définit la version de votre API. Celle-ci est affichée dans toutes les réponses de votre API

```javascript
rebst.init({
    version: '1.0.0'
})
```

### Time

- Type: `Boolean`
- Défaut: `false`

Quand elle est activée, elle affiche l'heure à laquelle la réponse à été traitée. (UTC)

```javascript
rebst.init({
    time: true
})
```

### Format

- Type: `String`
- Défaut: `json`

Définit le format de votre réponse. Les formats supportés sont le json et le xml

```javascript
rebst.init({
    format: 'xml'
})
```

### Payload

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

### Console

- Type: `Boolean`
- Défaut: `true`

Active ou non la console. Lorsqu'elle est activée, un bilan de chaque réponse est envoyé et s'affiche dans la console. Utile pour débugger votre API

```javascript
rebst.init({
    console: true
})
```

### Headers

- Type: `Object`
- Défaut: `null`

Cette option vous permais d'ajouter des headers pour chacune des réponses renvoyés par votre application

```javascript
rebst.init({
    headers: {
        'Header-Name': 'Header-Value'
    }
})
```

## Plugins

### Cors

- Type: `Object`
- Défaut: `disabled`

Ce plugin vous permet d'utiliser Cors sans avoir une seule ligne de code à faire. Pour apprendre à utiliser ce plugin, cliquez [ici]()

```javascript
rebst.init({
    enabled: true,
    origin: '*',
    methods: 'GET, POST, PUT, PATCH, DELETE',
    exposedHeaders: [],
    allowedHeaders: [],
    credentials: false,
    maxAge: 10
})
```

### Body Parser

- Type: `Object`
- Défaut: `disabled`

Ce plugin vous permet de récupérer et de transformer le body de la requête quand cela est possible. Pour apprendre à utiliser ce plugin, cliquez [ici]()

```javascript
rebst.init({
    enabled: true,
    bodyReqErr: false
})
```

### Res ID

- Type: `Object`
- Défaut: `disabled`

Ce plugin donne un ID unique à chaque réponse. Pour apprendre à utiliser ce plugin, cliquez [ici]()

```javascript
rebst.init({
    enabled: true,
    type: 'body',
    headerName: 'Res-Id'
})
```

### Encrypt

- Type: `Object`
- Défaut: `disabled`

Ce plugin permet d'encrypter la réponse. Il utilise le package `cryptr`. Il est déconseillez d'utiliser à l'heure actuelle ce plugin si votre API est déjà publique car `cryptr` 
semble avoir un système d'encryptage insuffisant. Ce problème sera régler d'ici peu. Pour apprendre à utiliser ce plugin, cliquez [ici]()

```javascript
rebst.init({
    enabled: true,
    key: 'grdsg4d451s1f5sf6sf4s6f'
})
```