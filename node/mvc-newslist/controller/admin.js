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
        let size = 5;
        let p = ctx.query.p || 1;
        let formatData = adminService.newsList(p,size);
        let prev = adminService.getPages(p,size).prev;
        let next = adminService.getPages(p,size).next;
        let pages = adminService.getPages(p,size).pages;
        await ctx.render('admin/newsList.pug',{
            formatData,
            prev,
            next,
            pages
        })
    },
    async addNewsData(ctx) {
        // console.log(ctx.request.body);
        // console.log(ctx.request.files);
        let res = await adminService.addNewsData(ctx.request);
        await ctx.render('admin/message.pug', {
            res
        });
    },
    async deleteList(ctx) {
        // console.log(ctx.query.id);
        let id = ctx.query.id;
        let res = await adminService.deleteList(id);
        console.log(res);
        // if(res.code == 0) {
            ctx.redirect('/admin/newsList');
        // }
    }
}