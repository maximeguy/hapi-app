var Config = require('../config'),
    Crypto = require('crypto'),
    Algorithm = 'aes-256-ctr',
    privateKey = Config.key.privateKey;

exports.home = function(request, reply) {
    return reply("Hello!");
};

exports.decrypt = function(password) {
    return decrypt(password);
};

exports.encrypt = function(password) {
    return encrypt(password);
};

function decrypt(password) {
    var decipher = Crypto.createDecipher(Algorithm, privateKey);
    var dec = decipher.update(password, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

// method to encrypt data(password)
function encrypt(password) {
    var cipher = Crypto.createCipher(Algorithm, privateKey);
    var crypted = cipher.update(password, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
