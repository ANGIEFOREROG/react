const http = require ('node:http')

// verbo http:// localhost:8080
const server = http.createServer((peticion, respuesta)=>{
    respuesta.end('mi primer servidor')


})//

server.listen(8080,()=>{
    console.log(' server escuchando en el puero 8080')
})
