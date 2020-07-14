const http = require('http');//引入http模块
const url = require('url')
// const api = 'https://www.bilibili.com/video/av38925557/?p=2&age=30'
// // console.log(url.parse(api))
// let query = url.parse(api,true).query
// console.log(query)

//http.createServe创建web服务
//request获取url传递过来的信息
//response给浏览器响应的信息
http.createServer((req, res) => {
  console.log(req.url)

  //设置响应头
  res.writeHead(200, { "Content-Type": "text/html;charset = 'utf-8'" })//解决乱码
  res.write('<head><meta charset="UTF-8"></head>')//解决乱码

  console.log('req.url',req.url)//获取浏览器访问的地址

  res.write('<h2>巴啦啦===this is nodejs</h2>')
  
  res.end();//给页面上面输出一句话并结束响应,必须得写

}).listen(4000);//表示一个端口
// console.log('11111')

