// Load modules

var Joi = require('joi'),
    MainC = require('./controller/main');


// API Server Endpoints
exports.endpoints = [
    {
        method: 'GET',
        path: '/',
        config: {
            handler: MainC.home
        }
    },

    // Static Assets Routes

    {
        method: 'GET',
        path: '/static/fonts/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'assets/fonts',
                    listing: false
                }
            }
        }

    },

    {
        method: 'GET',
        path: '/static/img/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'assets/img',
                    listing: false
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/static/svg/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'assets/svg',
                    listing: false
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/static/inputs/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'assets/svg/inputs',
                    listing: false
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/static/css/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'css',
                    listing: false
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/static/js/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'js',
                    listing: false
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/static/data/{param*}',
        config: {
            handler: {
                directory: {
                    path: 'data',
                    listing: false
                }
            }
        }
    },

    {
        method: 'GET',
        path: '/bower/{param*}',
        config: {
            handler: {
                directory: {
                    path: __dirname + '/../bower_components',
                    listing: false
                }
            }
        }
    }

];
