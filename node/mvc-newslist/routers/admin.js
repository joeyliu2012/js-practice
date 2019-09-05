const Router = require('koa-router');
const adminController = require('../controller/admin');

let routerAdmin = new Router({
    prefix:"/admin"
});

routerAdmin.get('/index', adminController.showIndex);
routerAdmin.get('/addNews', adminController.addNews);

module.exports = routerAdmin;