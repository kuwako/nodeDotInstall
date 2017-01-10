var http = require("http");
var settings = require("./settings");
console.log(settings);
console.log(settings.port);
console.log(settings.host);
var server = http.createServer();

server.on('request', function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('hello from ' + req.url);
    res.end();
});

server.listen(settings.port, settings.host);
console.log("server listening ...");
