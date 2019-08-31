const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');

let myData = require('./data.json');
const cheerio = require('cheerio');

let server = http.createServer((req, res) => {
    if (req.url === '/news') {
        let newsData = fs.readFileSync('./views/index.html');
        let $ = cheerio.load(newsData);
        let myHtml = '';
        myData.forEach(v => {
            myHtml += `<li class="news">
            <a href="javascript:;">
                <img src="./img/img.png" alt="">
            </a>
            <div>
                <h3>
                    <a href="javascript:;">${v.title}</a>
                </h3>
                <div class="info">
                    <span class="tips"><span>纵火</span><span>韩国</span><span>逮捕</span></span>
                    <!-- <span class="line"></span> -->
                    <span class="time">| &nbsp;&nbsp;${v.addtime}</span>
                </div>
            </div>
        </li>`
        });
        $('.news-list').html(myHtml);
        res.end($.html());
    } else if (req.url === '/detail') {
        let newsData = fs.readFileSync('./views/detail.html');
        res.end(newsData);
    } else {
        if (req.url !== '/favicon.ico') {
            let extname = path.extname(req.url);
            console.log('ex', extname);
            res.writeHead(200, { 'Content-type': mime[extname] });
            let rs = fs.createReadStream("./views/" + req.url);
            rs.pipe(res);
        }
    }
});
server.listen(3000);