const Koa = require('koa');
const Router = require('koa-router');

let app = new Koa();
let router = new Router();

router.get('/',(ctx, next) => {
    ctx.body = 'hello';
});

router.get('/getData',(ctx, next) => {
    // ctx.status = 302 // redirection
    // ctx.set('location','baidu.com');

    ctx.body = {
        name: 'Tom',
        age: 20
    }
});


app.use(router.routes());

app.listen(3000);