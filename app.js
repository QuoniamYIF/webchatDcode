var Koa = require('koa');
var wechat = require('./access');
var config = {
    wechat: {
        appID:'wx4eb23e853c517871',
        appSecret: '9cb37d4aed3618e55a9e700bf94485b5',
        token: 'quoniammm'
    }
}
var app = new Koa();

app.use(wechat(config));

app.listen(80);