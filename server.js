var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var port = 80;
var hostname = '10.177.83.166';
var server = http.createServer(function(request,response){
    var urlObj = url.parse(request.url);
    var staticPath = path.join(__dirname, 'static')
    if (urlObj.pathname === '/') {
        urlObj.pathname += 'index.html'
    }
    console.log(urlObj.pathname)
    var filePath = path.join(__dirname, urlObj.pathname);
    fs.readFile(filePath, 'binary', function (error, filecontent) {
        if (error) {
        throw error
        } else {
            response.write(filecontent, 'binary')
            response.end()
        }
    })
}).listen(port,hostname,function(){
    console.log(`Server Running : http://${hostname}:${port}`)
})