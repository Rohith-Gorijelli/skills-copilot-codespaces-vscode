 // Create web server

 const server = http.createServer((req, res) => {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    // Send the response body "Hello World"
    res.end('Hello World\n');
  });
  
  server.listen(3000);
  
  // Print URL for accessing server
  console.log('Server running at http://loca;host:3000/');
