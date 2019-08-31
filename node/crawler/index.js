const http = require('http');
const cheerio = require('cheerio');
const fs = require('fs');

let webUrl = "http://news.ifeng.com/";
http.get(webUrl,req =>{
    let str = "";
    req.on("data", chunk => {
        str += chunk;
    })
    req.on("end", () => {
        // console.log(str);
        formatData(str);
    })
});

function formatData(data) {
    let $ = cheerio.load(data);
    let arr =[];
    $(".news-stream-newsStream-news-item-infor h2 a").each((k,v) => {
        // console.log($(v).text());
        let date = new Date();
        let obj = {
            id: k+1,
            title: $(v).text(),
            addtime: date.getFullYear() + '-' +(date.getMonth() + 1) + '-' + date.getDate(),
            country: '美国',
            type: '抓捕',
            detail: $(v).text(),
            img: './img/img.png'
        }
        arr.push(obj);
    });
    fs.writeFileSync("data.json",JSON.stringify(arr));
}