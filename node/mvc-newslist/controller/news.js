const newsService = require('../service/news');

module.exports = {
    async showIndex(ctx) {
        let size = 5;
        let p = ctx.query.p || 1;
        let newsData = newsService.getData(size,p);
        let prev = newsService.getPages(p,size).prev;
        let next = newsService.getPages(p,size).next;
        let pages = newsService.getPages(p,size).pages;
        // ctx.body = 'hello';
        await ctx.render('news/index.pug', {
            newsData,
            prev,
            next,
            pages
        })
    },
    async showDetail(ctx) {
        let id = ctx.query.id || 1;
        let detailData = newsService.getDetailData(id);
        // ctx.body = 'news detail';
        await ctx.render('news/detail.pug', {
            detailData,
        })
    }
}