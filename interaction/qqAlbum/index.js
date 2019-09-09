const Koa = require('koa');
const Router = require('koa-router');
const static = require('koa-static');
const koaBody = require('koa-body');
const nunjucks = require('koa-nunjucks-2');

let userData = [
    {
        username: '123',
        password: '123'
    },
    {
        username: 'abc',
        password: 'abc'
    }
]

let app = new Koa();
let router = new Router();

app.use(koaBody({
    multipart: true
}))

app.use(nunjucks({
    ext: "html",
    path: __dirname + "/views"
}))
app.use(static(__dirname + "/static"));

router.get('/', async ctx => {
    await ctx.render('login');
})

router.get('/login', async ctx => {
    await ctx.render('login');
})

router.post('/login', ctx => {
    console.log(ctx.request.body);
    let req =  JSON.parse(ctx.request.body);
    // ctx.set("Content-Type", "application/json")
    let res = userData.find(v => {
        return v.username == req.username && v.password == req.password;
    })
    if(res) {
        ctx.body = {
            code: 0,
            info: '登陆成功'
        }
        // ctx.redirect('/photo');
    } else {
        ctx.body = {
            code: 1,
            info: '登陆失败'
        }
    }
})

router.get('/checkUser', ctx => {
    let user = ctx.query.username;
    let res = userData.some(item => item.username == user);
    if (res) {
        ctx.body = {
            id: 1,
            code: 0,
            info: '用户名正确'
        }
    } else {
        ctx.body = {
            id: 2,
            code: 1,
            info: '用户名错误'
        }
    }
})

router.get('/photo', async ctx => {
    await ctx.render('photo');
})

app.use(router.routes());
app.listen(3000);