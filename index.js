const http = require('http')
const fs = require('fs')

const replaceTemplate = require('./modules/replaceTemplate.js')

/////////////////////////////////

const tempAccueil = fs.readFileSync(`${__dirname}/templates/tempAccueil.html`, 'utf-8')
const tempResto = fs.readFileSync(`${__dirname}/templates/tempResto.html`, 'utf-8')
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8')
const dataObj = JSON.parse(data)


const server = http.createServer((req, res) => {
    const pathName = req.url
    
    if (pathName === '/' || pathName === '/accueil') {
        res.writeHead(200, { 'Content-type': 'text/html' })
        const cardResto = dataObj.map(el => replaceTemplate(tempResto, el)).join('')
        const accueil = tempAccueil.replace('{$TEMP_RESTO$}', cardResto)
        res.end(accueil)
    }
    else {
        res.writeHead(404)
        res.end('Page not found !')
    }
})



server.listen(8000, () =>{
    console.log('Server launched on port 8000.✅')
})