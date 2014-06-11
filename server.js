var http = require('http'),
    path = require('path'),
    fs = require('fs');

var defaultPath = './app/';

var port = Number(process.env.PORT || 8000);

http.createServer(function(request, response) {
    var fileRequest = request.url == '/' ? 'index.html' : request.url;
    fs.readFile(defaultPath+fileRequest, function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end();
        }
        else {
            var headers = '';
            if(path.extname(fileRequest) == '.js'){
                headers = {'Content-Type': 'text/javascript'};
            }
            if(path.extname(fileRequest) == '.html'){
                headers = {'Content-Type': 'text/html'};
            }
            if(path.extname(fileRequest) == '.css'){
                headers = {'Content-Type': 'text/css'};
            }
            response.writeHead(200,headers);
            response.end(content, 'utf-8');
        }
    });
}).listen(port);

