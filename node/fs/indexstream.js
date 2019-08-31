const fs = require('fs');
// CRUD

// stream
const http = require('http');
const mime = require('./mime.json');
const path = require('path');

let server = http.createServer((req, res) => {
    console.log(req.url);

    // res.setHeader('Content-type','text/html;charset=utf-8');
    if (req.url === '/index') {
        res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
        let rs = fs.createReadStream("./index.html");
        rs.pipe(res);
    } else if (req.url === '/product') {
        res.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
        let rs = fs.createReadStream("./product.html");
        rs.pipe(res);
    } else {
        let extname = path.extname(req.url);
        console.log('ex',extname);
        res.writeHead(200, { 'Content-type': mime[extname] });
        let rs = fs.createReadStream("." + req.url);
        rs.pipe(res);
    }

})
server.listen(3000);