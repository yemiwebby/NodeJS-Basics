/**
 * Created by oluyemi on 13-Dec-16.
 */

var http = require('http');
var app = require('./app');

//note that we are referencing the functions here, so it will be without parenthesis
http.createServer(app.handleRequest).listen(8000);
