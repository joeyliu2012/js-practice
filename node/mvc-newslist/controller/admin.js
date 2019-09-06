const adminService = require('../service/admin');
module.exports = {
    async showIndex(ctx) {
        // ctx.body = "admin homepage";
        await ctx.render('admin/admin.pug')
    },
    async addNews(ctx) {
        // ctx.body = "addNews page";
        await ctx.render('admin/addNews.pug')
    },
    async newsList(ctx) {
        // ctx.body = "addNews page";
        await ctx.render('admin/newsList.pug')
    },
    async addNewsData(ctx) {
        // console.log(ctx.request.body);
        // console.log(ctx.request.files);
        let res = await adminService.addNewsData(ctx.request);
        await ctx.render('admin/message.pug', {
            res
        });
    }
}