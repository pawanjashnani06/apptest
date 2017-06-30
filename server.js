'use strict';
/**************************************************************************************************
 * This sample demonstrates the most simplistic usage of Swagger-Express-Middleware.
 * It simply creates a new Express Application and adds all of the Swagger middleware
 * without changing any options, and without adding any custom middleware.
 **************************************************************************************************/

// Set the DEBUG environment variable to enable debug output
process.env.DEBUG = 'swagger:middleware';

var express = require('express');
var middleware = require('swagger-express-middleware');
var path = require('path');
var app = express();
var swaggerCombine = require('swagger-combine');
var yaml = require('write-yaml');

app.get('/swagger.yaml', swaggerCombine.middleware('docs/swagger.yaml', {format: 'yaml'}));

swaggerCombine('docs/swagger.yaml').then(combined =>
passIntoMiddleWare(combined)
).
catch(error => console.log('an error occured: ' + error)
)
;

function passIntoMiddleWare(combined) {

    yaml.sync('output/combined.yaml', combined);

    middleware(combined, app, function (err, middleware) {

        app.use(
            middleware.metadata(),
            middleware.CORS(),
            middleware.files(),
            middleware.parseRequest(),
            middleware.validateRequest(),
            middleware.mock()
        );

        app.listen(8000, function () {
            console.log('=============================================================');
            console.log('Stubs running on  http://localhost:8000');
            console.log('To view combined contract  http://localhost:8000/swagger.yaml');
            console.log('=============================================================');
        });
    });
};


