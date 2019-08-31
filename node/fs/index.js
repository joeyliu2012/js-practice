const fs = require('fs');
// CRUD

const http = require('http');
let server = http.createServer((req, res) => {
    console.log(req.url);
    res.writeHead(200, {'Content-type':'text/html;charset=utf-8'});
    // res.setHeader('Content-type','text/html;charset=utf-8');
    if (req.url === '/index') {
        let indexData = fs.readFileSync("./index.html");
        res.write(indexData);
        res.end();
    } else if (req.url === '/product') {
        let productData = fs.readFileSync("./product.html");
        res.write(productData);
        res.end();
    }

})
server.listen(3000);