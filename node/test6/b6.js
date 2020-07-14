//createReadStream复制大型文件
const fs = require('fs')
var str = ''
for(var i =0;i<500;i++){
  str+=  '是数据库拿来的鸭子，需要保存\n'
}
const writeStream = fs.createWriteStream('./data/save.txt')
writeStream.write(str)

writeStream.end()//监听写入完成
writeStream.on('finish',()=>{
  console.log('写入完成')
})