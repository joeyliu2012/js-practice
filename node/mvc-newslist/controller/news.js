const newsService = require('../service/news');

module.exports = {
    showIndex(ctx) {
        ctx.body = 'hello';
        // ctx.render('')
    },
    showDetail(ctx) {
        ctx.body = 'news detail';
    }
}