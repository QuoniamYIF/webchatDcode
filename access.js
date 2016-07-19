var sha1 = require('sha1');

module.exports = function(opts) {
    return function *(next) {
                // console.log('test');
                var token = opts.wechat.token;
                var timestamp = this.query.timestamp;
                var nonce = this.query.nonce;
                var signature = this.query.signature;
                var echostr = this.query.echostr;    
                
                var str = sha1([token, timestamp, nonce].sort().join(''));
                // console.log(str);
                // console.log('\n');
                // console.log(signature);
                if(str === signature){
                    this.body = echostr + '';
                } else {
                    this.body = 'WRONG';
                }
            }
}