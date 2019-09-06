let newsData = require('../data/data.json'); 

module.exports = {
    getData (size,p) {
        let formatData = newsData.slice(size*(p-1), p*size);
        return formatData;
    },
    getPages(p,size) {
        p = parseInt(p);
        let pages = Math.ceil(newsData.length/size);
        let prev = p<=1?1:p-1;
        let next = p>=pages?pages:p+1;
        return {prev,next,pages};
    },
    getDetailData(id) {
        return newsData[id-1];
    }

}