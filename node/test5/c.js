function test(){
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      var name = '至尊宝'
      resolve(name)
    },1500)
  })
}

async function main(){
  var res1 = await test()
  console.log(res1)
}
main()