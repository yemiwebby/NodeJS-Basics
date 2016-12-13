/**
 * Created by oluyemi on 12-Dec-16.
 */

var http = require('http');

function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Currently setting up the server for our application');
    response.end();
}

http.createServer(onRequest).listen(8000);