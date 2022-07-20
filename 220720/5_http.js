const http = require("http");

const server = http.createServer( function(req, res){
    res.writeHead(200, { 'content-Type': 'text/html; charset=utf8'});
    res.write("<h1>hi</hi>");
    res.end("<p>안녕</p>");
});

server.listen(8000, function(){
    console.log( "8000번 포트");
})

server.on( "request", function(){
    console.log( "Client Request" );
})

server.on( "connection", function(){
    console.log( "Client Connection" );
})

server.on( "checkContinue", function(){
    console.log( "Client checkContinue" );
})
