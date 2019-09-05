let routerNews = require('./routers/news');
let routerAdmin = require('./routers/admin');

module.exports = (app)=> {
    app.use(routerNews.routes());
    app.use(routerAdmin.routes());
}