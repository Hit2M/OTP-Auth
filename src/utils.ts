import * as CryptoJs from 'crypto-js';
var key = 'key1234';
var encrypted, decrypted;

export function encrypt(data:string): string {
    encrypted = CryptoJs.AES.encrypt(JSON.stringify(data), key).toString();

    return encrypted;
}

export function decrypt(data:string):string {
    var bytes  = CryptoJs.AES.decrypt(data, key);
    decrypted = JSON.parse(bytes.toString(CryptoJs.enc.Utf8));
    
    return decrypted;
}