var Koa = require('koa');
var path = require('path');
var util = require('./libs/util');
var wechat = require('./access');
var wechat_file = path.join(__dirname, './config/wechat.txt');
var config = {
    wechat: {
        appID:'wx4eb23e853c517871',
        appSecret: '9cb37d4aed3618e55a9e700bf94485b5',
        token: 'quoniammm',
        getAccessToken: function() {
            return util.readFileAsync(wechat_file);
        },
        saveAcessToken: function(data) {
            data = JSON.parse(data);
            return util.writeFileAsync(wechat_file, data);
        }
    }
}
var app = new Koa();

app.use(wechat(config.wechat));

app.listen(80);