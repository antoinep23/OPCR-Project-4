const http = require('http')
const fs = require('fs')


const server = http.createServer((req, res) => {
    res.end('Hello world')
})

server.listen(8000, () =>{
    console.log('Server launched on port 8000.✅')
})