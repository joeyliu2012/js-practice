let Koa  = require('koa');
let app = new Koa();
let m3 = require('./m3.js');
app.use((ctx,next)=>{
    ctx.body = "hello world";
    next();
})

app.on('error',(err)=>{
    console.log(err);
})

app.use(m3);
app.listen(3000);