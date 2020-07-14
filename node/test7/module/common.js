const fs = require('fs')

exports.getContentTypeFile = function (name) {
  fs.readFile('../module/ContentType.json', (err, data) => {
    if (err) {
      console.log('没有该文件', err)
    }
    // let str = data.toString()
    // let obj = JSON.parse(data.toString())
    console.log('有该文件',data)
  })
}

// exports.changeContentType = function(name){
//   switch(name){
//     case '.html':
//       return 'text/html';
//     case '.css':
//       return 'text/css';
//       case '.js':
//         return 'text/javascript';
//     default:
//       return 'text/html'

//   }
// }