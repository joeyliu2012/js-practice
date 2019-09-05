const Koa = require('koa');
const views = require('koa-views');
const static = require('koa-static');
const router = require('./router');
const koaBody = require('koa-body');
let app = new Koa();

app.use(koaBody({
    multipart:true  //allow upload
}))
app.use(static(__dirname + "/static"));
app.use(views(__dirname + "/views"),{
    map: {
        html: 'pug'
    }
});

router(app);
app.listen(3000);