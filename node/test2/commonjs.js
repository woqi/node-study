const http = require('http')
const tools = require('./module/tools.js')
const request = require('./module/request')
console.log(request)

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html;charset = 'utf-8'" })//解决乱码
  res.write('<head><meta charset="UTF-8"></head>')
  res.write('<h2>巴啦啦===this is nodejs</h2>')
  let api = tools.formatUrl('api/plist')
  res.write(api)
  res.end()
}).listen(4000)