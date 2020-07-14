let md5 = require('md5')
// console.log(md5('123456'))

let sd = require('silly-datetime');
console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm'),sd.fromNow(+new Date() - 2000))

// 2015-07-06 15:10
 
sd.fromNow(+new Date() - 2000);