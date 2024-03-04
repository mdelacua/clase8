
//importamos una librería
//ES5
var http = require('node:http');

var PORT = 9000; 

//3000
//4200
//57000
//8080
//3306
//27000

var hostname = '127.0.0.1';

//creamos el server
const server = http.createServer((request, response) => {

    response.statusCode = 200;

    response.setHeader('Content-Type', 'text/plain');

    //GET
    //POST
    //PUT
    //DELETE

    //analizo la ruta

    console.log(request);

    console.log('==========================================');
    console.log(request.url);
    console.log(request.method);
    console.log(request.headers);
    console.log(request.body);
    console.log('==========================================');  
    
    if(request.url === '/hola'){
        response.end('Hola mundo');
    }else if(request.url === '/adios'){
        response.end('Adios mundo');
    }else if(request.url === '/error'){
        response.statusCode = 404;
        response.end('Error');
    }
/* 
    switch (request.url) {
        case '/hola':
            response.end('Hola mundo');
            break;
    
        default:
            break;
    } */

});

//levantamos el server
server.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
});

