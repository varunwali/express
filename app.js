const http = require('http');

http.createServer((req,resp)=>{
resp.write("Hello welcome to our website");
resp.end();
}).listen(5500);

const fs = require('fs');
fs.writeFileSync('file.txt','hello');
