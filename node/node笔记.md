`supervisor app.js`实时监听本地文件

暴露模块方法有两种

1.`exports.obj = obj  //{ obj: { get: [Function: get], post: [Function: post] } }`

很多方法时候使用

2.`module.exports = obj; //{ get: [Function: get], post: [Function: post] }`

只有一个方法时候使用





引入 在node_modules文件不用写`./node_modules/axios/index`

直接写`axios/index`

fs是异步

