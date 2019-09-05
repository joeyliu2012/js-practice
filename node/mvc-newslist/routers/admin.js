const Router = require('koa-router');
const adminController = require('../controller/admin');

let routerAdmin = new Router({
    prefix:"/admin"
});

routerAdmin.get('/index', adminController.showIndex);
routerAdmin.get('/addNews', adminController.addNews);
routerAdmin.get('/newslist', adminController.newsList);
routerAdmin.all('/addNewsData', adminController.addNewsData);

module.exports = routerAdmin;