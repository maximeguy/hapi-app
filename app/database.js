var Mongoose = require('mongoose'),
    config = require('./config'),
    uriUtil = require('mongodb-uri');

var mongodbUri = 'mongodb://' + config.database.user + ':' + config.database.pass + '@' + config.database.host + ':' + config.database.port + '/' + config.database.db;
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

Mongoose.connect(mongooseUri);
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log("Connection with database succeeded.");
});
exports.Mongoose = Mongoose;
exports.db = db;
