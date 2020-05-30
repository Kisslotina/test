var http = require('http');
var https = require('https');

var connectReq = http.request({ // establishing a tunnel
  host: 'localhost',
  port: 3128,
  method: 'CONNECT',
  path: 'github.com:443',
}).on('connect', function(res, socket, head) {
  // should check res.statusCode here
  var req = https.get({
    host: 'github.com',
    socket: socket, // using a tunnel
    agent: false    // cannot use a default agent
  }, function(res) {
    res.setEncoding('utf8');
    res.on('data', console.log);
  });
}).end();
