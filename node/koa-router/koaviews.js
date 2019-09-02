const Koa = require('koa');
const Router = require('koa-router');
const views = require('koa-views');
const static = require('koa-static');

let app = new Koa();
let router = new Router();

app.use(views(__dirname + '/views'),{
    map: {
        html: 'pug'
    }
})

app.use(static(__dirname + '/static'));

router.get('/',async ctx =>{
    await ctx.render('index.pug', {
        name: 'Tom'
    });
})

app.use(router.routes());
app.listen(3000);