const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');
const nunjucks = require('koa-nunjucks-2');

let app = new Koa();
let router = new Router();

app.use(koaBody({
    multipart: true
}))

app.use(nunjucks({
    ext:"html",
    path: __dirname + "/views"
}))
app.use(static(__dirname + "/static"));

router.get('/',ctx => {
    ctx.body = 'hello';
})

router.get('/photo', async ctx => {
    await ctx.render('photo');
})

app.use(router.routes());

app.listen(3000);