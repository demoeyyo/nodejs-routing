const http = require('http');
const fs = require('fs');
const {execPath}=require('process')

const hostname = "localhost"
const port = 9000;

const server = http.createServer((req, res) => {
    let path = './view/'
    if (req.url === '/' || req.url === '/home') {
        path += 'home.html'
    }
    else if (req.url === '/about' || req.url === '/about-us') {
        path += 'about.html'
    }
    else if (req.url === '/contact') {
        path += 'contact.html'
    }
    else {
        path += 'error.html'
    }
    fs.readFile(path, (err, data) => {
        if (err)
            return;
        res.writeHead(200, { 'Content-type': 'text/html' })
        res.end(data);
    })
})
server.listen(port, hostname, () => {
    console.log(`Server is listening at http://${hostname}:${port}`)
})