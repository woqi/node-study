//nodejs创建web服务器//访问服务器上的网站//下载服务器上的文件

const http = require('http');
const fs = require('fs')
const path = require('path')
const url = require('url')

const common = require('./module/common.js')
common.getContentTypeFile('111.xml')

http.createServer(function (req, res) {
  //1获取地址
  let pathName = url.parse(req.url).pathname
  // console.log('req.url',req.url)
  console.log('pathName',pathName)

  if(pathName == '/'){
    pathName =  '/index.html'
  }

  // path.extname()//获取文件后缀名

  let extname = path.extname(pathName)
  console.log('extname',extname)

  //通过fs模块读取文件
  if (pathName != '/favicon.ico') {
    fs.readFile('./static' + pathName, (err, info) => {
      let changeContentType = common.changeContentType(extname)//获取文件类型
      if (err) {
        res.writeHead(404, { 'Content-Type': `${changeContentType};charset="utf-8"` });
        res.end('页面不存在');
      }

      res.writeHead(200, { 'Content-Type': `${changeContentType};charset="utf-8"` });
      res.end(info);

    })

  }





}).listen(4000);

