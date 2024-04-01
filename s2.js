const http = require('http');
const hostname = '172.50.21.9';
const port = 1111;
const requestListener = function(req,res){
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    if(req.method=='POST'){
        res.end("Hello Everyone ,I am 557!"+'\n'+"js with post")
    }if(req.method=='GET'){
        res.end("hello everyone ,I am 557"+'\n'+"js with get");
    }
}
const server =http.createServer(requestListener);
server.listen(port,hostname);
