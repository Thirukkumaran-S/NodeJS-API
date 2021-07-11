const http=require('http');

const app=require('./app');

const port=3000;

const server=http.createServer(app);

server.listen(port);  

//this is changes by dev ----
//this is done by me- prasath pom poom pom