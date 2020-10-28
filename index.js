//const http = require('http');
const colors = require('colors');

const express = require('express');
const server = express();

server.get('/', function(req, res){
    res.send('<h1>Hola mundo con express y nodejs</h1>')
    res.end()
})

server.listen(3000, function(){
    console.log("Server on port 3000".red)
});

/* //*Creando un servidor 
const handleServer = function(req, res){
    res.writeHead(200, {'content-type': 'text/html'})
    res.write('<h1>Hola mundo desde node</h1>');
    res.end();
}

const server = http.createServer(handleServer)

server.listen(3000, function(){
    console.log('Server on port 3000')
}) */

/*
*LEYENDO UN ARHIVO
const fs = require('fs');

fs.readFile('./texto.txt', function(err, data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
})



var texto = 'Hola soy un texto creado desde una variable'

*CREANDO ARCHIVOS

fs.writeFile('./texto.txt',texto, function(err){
    if (err){
        console.log(err)
    }
    console.log('Archivo creado');
});
console.log('ultima linea de codigo')
*/
/*
*MODULOS DEL SISTEMA
console.log(os.platform())
console.log(os.homedir())
console.log(os.release())
console.log(os.totalmem())
console.log(os.freemem())
console.log(os.hostname())
console.log(os.type())
console.log(os.uptime())
*/