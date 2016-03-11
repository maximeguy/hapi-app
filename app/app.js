'use strict';

var Join = require('path').join,
    //Mongoose = require('mongoose'),
    //Db = require('./database'),
    Hapi = require('hapi'),
    Inert = require('inert'),
    Vision = require('vision'),
    Handlebars = require('handlebars'),
    Config = require('./config');


var server = new Hapi.Server();

server.connection({
    host: Config.server.host,
    port: process.env.PORT || Config.server.port,
    routes: {
        cors: true,
        files: {
            relativeTo: Join(__dirname, '../static')
        }
    }
});

server.register(
    [
        {
            register: require("good"),
            options: {
                reporters: [{
                    reporter: require('good-console'),
                    events: { request: '*', log: '*', response: '*', 'error': '*' }
                }]
            }
        },
        Inert,
        Vision
    ], function(err) {
        if (err) {
            console.error('Failed to load a plugin:', err);
        }

        server.views({
            engines: {
                html: Handlebars.create()
            },
            path: Join(__dirname, 'view'),
            layout: true,
            layoutPath: Join(__dirname, 'view/layouts'),
            partialsPath: Join(__dirname, 'view/partials'),
            helpersPath: Join(__dirname, 'view/helpers')
        });

        server.route(require('./routes').endpoints);
    });

// Start Server
server.start(function() {
    console.log('Server running at:', server.info.uri);
});
