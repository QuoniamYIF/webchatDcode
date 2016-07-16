var Koa = require('koa');
var sha1 = require('sha1');
var config = {
    wechat: {
        appID:'wx4eb23e853c517871',
        appSecret: '9cb37d4aed3618e55a9e700bf94485b5',
        token: 'quoniammm'
    }
}

var app = new Koa();


app.use(function *(next) {
    // console.log('test');
    var token = config.wechat.token;
    var timestamp = this.query.timestamp;
    var nonce = this.query.nonce;
    var signature = this.query.signature;
    var echostr = this.query.echostr;    
    
    var str = sha1([token, timestamp, nonce].sort().join(''));
    console.log(str);
    console.log('\n');
    console.log(signature);
    if(str === signature){
        this.body = echostr + '';
    } else {
        this.body = 'WRONG';
    }
});

app.listen(80);