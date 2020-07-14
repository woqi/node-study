const fs = require('fs')

let dirArr = []
let path = './wwwroot'

fs.readdir(path, (err, data) => {
  if (err) {
    console.log('err', err)
    return
  }
  (function getDir(i) {
    if (i == data.length) {
      console.log(dirArr)
      return
    }
    fs.stat(`./wwwroot/${data[i]}`, (err, info) => {
      if(info.isDirectory()){
        dirArr.push(data[i])
      }
      getDir(i + 1)
    })
  })(0)
})
console.log(dirArr);



// const fs = require("fs");
// const path = require('path');
// // let __dirname = './wwwroot'
// const readDir = (entry) => {
// 	const dirInfo = fs.readdirSync(entry);
// 	dirInfo.forEach(item=>{
// 		const location = path.join(entry,item);
// 		const info = fs.statSync(location);
// 		if(info.isDirectory()){
// 			console.log(`dir:${location}`);
// 			readDir(location);
// 		}else{
// 			console.log(`file:${location}`);
// 		}
// 	})
// }
// readDir('./wwwroot');
