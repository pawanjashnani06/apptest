'use strict';

var SwaggerExpress = require('swagger-express-mw');
var app = require('express')();
var cors = require('cors');

module.exports = app; // for testing

    var config = {
        appRoot: __dirname, // required config

        swaggerSecurityHandlers: {
            'API Key': function (req, authOrSecDef, scopesOrApiKey, cb) {
                // your security code
                if ('1234' === scopesOrApiKey) {
                    cb(null);
                } else {
                    cb(new Error('access denied!'));
                }
            }
        }
    };

    SwaggerExpress.create(config, function(err, swaggerExpress) {
        if (err) { throw err; }

        app.use(cors());
        // install middleware
        swaggerExpress.register(app);

        var port = process.env.PORT || 10010;
        app.listen(port);

        if (swaggerExpress.runner.swagger.paths['/test']) {
            console.log('try this:\ncurl http://127.0.0.1:' + port + '/api/services/v1/test');
        }
    });
