const http = require('http');
const fs = require('fs');

const server = http.createServer( async function(req, res){
    fs.readFile('./test.html', function(err,data){
        if ( err ) {
            console.error(err);
            res.writeHead(404);
            res.end(err.message);
        }
        else {
            res.writeHead(200);
            res.end(data);
        }
    })

    server.listen(8000, function(){
    console.log( "8000번 포트");

/* promises 썼을 때

const http = require('http');
const fs = require('fs').promises;

    try {
        const data = await fs.readFile('./test.html');
        res.writeHead(200);
        res.end(data);
    } catch(err) {
        console.error(err);
        res.writeHead(404);
        res.end(err.message);
    }
});

server.listen(8000, function(){
    console.log( "8000번 포트");
}) */