// Create web server
// Create a web server that listens on port 3000. When you visit the root URL, the server should respond with "Hello, World!".
// When you visit the URL /cats, the server should respond with "Meow!".
// When you visit the URL /dogs, the server should respond with "Woof!".
// When you visit the URL /cats_and_dogs, the server should respond with "Dogs and cats living together...mass hysteria!!".
// All other URLs should respond with a 404 error.
// You can test your server by visiting http://localhost:3000 in your browser.
var http = require('http');
var server = http.createServer(function(request, response){
  if (request.url === '/cats') {
    response.end('Meow!');
  } else if (request.url === '/dogs') {
    response.end('Woof!');
  } else if (request.url === '/cats_and_dogs') {
    response.end('Dogs and cats living together...mass hysteria!!');
  } else {
    response.statusCode = 404;
    response.end('404 Error: File Not Found');
  }
});
server.listen(3000);