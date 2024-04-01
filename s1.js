var http = require('http');
var options = {
    hostname:'172.50.21.7',
    port:'5632',
    method:"POST"
};
var req = http.request(options, function(response){
    var str=''
    response.on('data', function(chunk){
        str+=chunk;
    });
    response.on('end', function(){
        console.log(str);
    });
    req.on('error', error=>{
        console.error(error);
    });
    req.end();
})

