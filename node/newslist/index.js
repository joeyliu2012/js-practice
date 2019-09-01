const http = require('http');
const url = require('url')
const path = require('path');
const fs = require('fs');
const mime = require('./mime.json');

let myData = require('./data.json');
const cheerio = require('cheerio');

let server = http.createServer((req, res) => {
    // console.log(url.parse(req.url));
    let urlReq = url.parse(req.url);
    let pathname = urlReq.path;
    // console.log(urlReq)
    let p = urlReq.query || 1;
    if (pathname === '/news?' + p || pathname === '/news') {
        // console.log(p);
        let newsData = fs.readFileSync('./views/index.html');
        let $ = cheerio.load(newsData);
        let myHtml = '';
        let pageSize = 5;
        let pages = Math.ceil(myData.length / pageSize);
        console.log(pages);
        let data = myData.slice(pageSize * (p - 1), pageSize * p);
        console.log(data);
        data.forEach(v => {
            myHtml += `<li class="news">
            <a href="javascript:;">
                <img src="./img/img.png" alt="">
            </a>
            <div>
                <h3>
                    <a href="/detail?${v.id}">${v.title}</a>
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

        console.log('p', p);
        p = parseInt(p);
        let pagi = '';
        let prev = p <= 1 ? 1 : p - 1;
        let next = p >= pageSize ? pageSize : p + 1;

        pagi += `<a href="/news?${prev}" class="prev">⌜</a>`;
        for (let i = 1; i <= pages; i++) {
            pagi += ` <a href="/news?${i}">${i}</a>`;
        }
        pagi += `<a href="/news?${next}" class="next">⌝</a>`;

        $('.pagination').html(pagi);

        res.end($.html());
    } else if (pathname === '/detail?' + p || pathname === '/detail') {
        let newsData = fs.readFileSync('./views/detail.html');
        let $ = cheerio.load(newsData);
        let temp = '';
        temp += `<h1 class="title">${myData[p - 1].title}</h1>
            <div class="article-info"> 类型：纵火 时间：${myData[p - 1].addtime}</div>
            <p class="content">
                ${myData[p - 1].detail}
            </p>`
        $('.text').html(temp);
        res.end(temp);
    } else {
        if (pathname !== '/favicon.ico') {
            let extname = path.extname(pathname);
            console.log('ex', extname);
            res.writeHead(200, { 'Content-type': mime[extname] });
            let rs = fs.createReadStream("./views/" + pathname);
            rs.pipe(res);
        }
    }
});
server.listen(3000);