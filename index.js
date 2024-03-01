const http = require('http')
const fs = require('fs')


const tempAccueil = fs.readFileSync(`${__dirname}/templates/tempAccueil.html`, 'utf-8')


const server = http.createServer((req, res) => {
    const pathName = req.url
    
    if (pathName === '/' || pathName === '/accueil') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(tempAccueil)
    }
    else {
        res.writeHead(404)
        res.end('Page not found !')
    }
})




server.listen(8000, () =>{
    console.log('Server launched on port 8000.✅')
})