const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const views = require('koa-views');
const data = require('./data.json');

let app = new Koa();
let router = new Router();

app.use(views(__dirname + '/views'),{
    map:{
        html:'pug'
    }
})

app.use(static(__dirname + '/static'));

let size = 5;
let pages = Math.ceil(data.length/size);

router.get('/news',async (ctx) =>{
    let p = ctx.query.p || 1;
    let newsData = data.slice(size*(p-1), p*size);

    p = parseInt(p);
    let prev = p<=1?1:p-1;
    let next = p>=pages?pages:p+1;

    // console.log(newsData);
    // console.log(p,prev,next);
    await ctx.render('index.pug',{
        newsData,
        pages,
        prev,
        next
    }) 
})

router.get('/detail',async (ctx) =>{
    let id = ctx.query.id || 1;
    let newData = data[id-1]
    await ctx.render('detail.pug',{
        newData
    }) 
})

app.use(router.routes());
app.listen(3000);