//var http = require('http');

//http.createServer(function(request, response) {
  
//  response.writeHead(200, {"Content-Type": "text/plain"});
//  response.write("Hello World");
//  response.end();}).listen(8888);


var http = require('http');
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved."); 
     route(handle, pathname, response, request);
 }  
   // var content = route(handle, pathname);
   // response.write(content);
   // response.end();
  

  http.createServer(onRequest).listen(8888);
  console.log("Server has Started");
}

exports.start = start;
