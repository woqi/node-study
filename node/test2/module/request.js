// let obj = {
//   get(){
//     console.log('从服务器获取数据1')
//   },
//   post(){
//     console.log('提交数据1')
//   }
// }
// exports.obj = obj
// module.exports = obj;

exports.get=()=>{
  console.log('从服务器获取数据2')
},
exports.post=()=>{
  console.log('提交数据2')
}