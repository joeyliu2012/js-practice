let newsData = require('../data/data.json');
const fs = require('fs');
module.exports = {
    addNewsData(request) {
        let { title, content, type, country } = request.body;
        let dataObj = new Date();
        let obj = {
            title,
            content,
            type,
            country,
            addtime: dataObj.getFullYear()+ '-' +(dataObj.getMonth() + 1) + '-' + dataObj.getDate(),
            id: newsData[newsData.length - 1].id + 1
        }
        if (typeof request.files.img !== 'undefined') {
            fs.writeFileSync('static/img/' + request.files.img.name, fs.readFileSync(request.files.img.path));
            obj.img = './img/' + request.files.img.name;
        }
        newsData.push(obj);
        return new Promise(resolve => {
            fs.writeFile('data/data.json', JSON.stringify(newsData), err => {
                if (!err) {
                    console.log('add successfully');
                    resolve({
                        info: 'add successfully',
                        code: 0
                    })
                } else {
                    resolve({
                        info: 'add failed',
                        code: 1
                    })
                }
            })
        })
    },
    newsList(p,size) {
        return newsData.slice((p-1)*size,p*size);
    },
    getPages(p,size) {
        p = parseInt(p);
        let prev = p<=1?1:p-1;
        let next = p>=size?p:p+1;
        let pages = Math.ceil(newsData.length/size);
        return {
            prev,next,pages
        }
    },
    deleteList(id) {
        newsData.forEach((v,k) =>{
            if(v.id == id) {
                newsData.splice(k,1);
            }
        })
        // console.log(newsData);
        return new Promise(resolve =>{
            fs.writeFile('data/data.json', JSON.stringify(newsData),err =>{
                if(!err) {
                    resolve({
                        info: 'delete successfully',
                        code: 0
                    })
                } else {
                    resolve({
                        info: 'delete failed',
                        code: 1
                    })
                }
            })
        })
    }
}