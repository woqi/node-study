const fs = require('fs')
const { resolve } = require('path')
const { rejects } = require('assert')
fs.stat('./upload',(err,data)=>{
  if(err){
    console.log('没有文件')
    mkdir('./upload')
  }
  if(data.isDirectory()){
    console.log('upload目录存在')
  }else{
    mkdir('./upload')
  }
  
})
function mkdir(name){
  fs.mkdir(name,(err)=>{
    if(err){
      console.log('创建文件夹失败',err)
    }
  })
}

