/**
 * Created by oluyemi on 13-Dec-16.
 */
    // in order to render html files from our server, we will need to import a module (file system) from nodeJS
var http = require('http');
var fs = require('fs');
function onRequest(request, response){
    response.writeHead(200, {'Content-Type': 'text/html'});
    //response.write('index.html');
    fs.readFile('./index.html',null, function(error, data){
       if(error){
           response.writeHead(404, 'page not found');
           response.write('File or page not found!!');
       } else {
           // we will just render our html page as data
           response.write(data);
       }
        response.end();
    });

    // it is better to end the response within the callback
    //response.end();
}

http.createServer(onRequest).listen(8000);