module.exports = { encrypt, key, checkKey }

const crypto = require('crypto')
const printer = require('../errorPrinter')

function encrypt(key, text) {
    let iv = crypto.randomBytes(16);
    let cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(key), iv);
    let encrypted = cipher.update(JSON.stringify(text));
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString('hex') + ':' + encrypted.toString('hex');
}
   
/*function decrypt(key, text) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(key), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}*/

function key() {
    var result = '';
    var chars = '0123456789abcdefghijklmnopqrstuvwxyz'
    for (var i = 32; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result
}

function checkKey(key, useLog = false) {
    if(key.length != 32) {
        printer('The key for the encrypt plugin must be 32 characters long', true, useLog)
        return false
    } else {
        return true
    }
}