/**
 * Created by oluyemi on 13-Dec-16.
 */
// this is a separate file that will contain the functions for routing and will be called from server.js

//module to get the path (URL)
var url = require('url');
//module for file system
var fs = require('fs');
//function to render html

function renderHTML(path, response){
    fs.readFile(path,null, function(error, data){
        if(error){
            response.writeHead(404, 'page not found');
            response.write('File or page not found!!');
        } else {
            // we will just render our html page as data
            response.write(data);
        }
        response.end();
    });
}
module.exports = {
    handleRequest: function(request, response){
        response.writeHead(200,{'Content-Type': 'text/html'});

        //check the URL entered
        var path = url.parse(request.url).pathname;
        switch (path){
            case '/':
                renderHTML('./index.html',response);
                break;
            case '/login':
                renderHTML('./login.html', response);
                break;
            case '/register':
                renderHTML('./register.html', response);
                break;
            default:
                response.writeHead(404);
                response.write('Route not defined');
                response.end();
        }
    }
};