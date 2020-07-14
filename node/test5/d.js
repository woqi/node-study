//将./wwwroot文件夹中的所有文件夹找到
const fs = require('fs')

function isDir(url) {
  return new Promise((resolve, reject) => {
    fs.stat(url, (err, info) => {
      if (err) {
        reject(err)
        console.log(err)
        return
      }
      if (info.isDirectory()) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}
function getDir() {
  const path = './wwwroot/'
  let dirArr = []
  fs.readdir(path, async (err, data) => {
    if (err) {
      console.log('err', err)
      return
    }
    for (var i = 0; i < data.length; i++) {
      if (await isDir(path + '/' + data[i])) {
        dirArr.push(data[i])
      }
    }
    console.log('-------------------+++',dirArr)
  })
  
}
getDir()

//  let content =  "[{\"modelType\":\"config\",\"dataField\":{\"title\":\"111\"}},{\"modelType\":\"addProduct\",\"dataField\":{\"checkBox\":[1,3],\"productSource\":\"\",\"productList\":[13],\"productGoupList\":[],\"ListStyle\":\"50%\",\"goodHeight\":\"\",\"productStyle\":\"\"}},{\"modelType\":\"productSearch\"},{\"modelType\":\"picture\",\"dataField\":{\"pictureList\":[{\"url\":\"http://static-legacy.oss-cn-hangzhou.aliyuncs.com/wx/crm/70ec30b4-1f3e-4f94-9b58-5eaec81c89d6.png?Expires=1909562533&OSSAccessKeyId=LTAI4GL4nmf6wYbaDKzSBvgx&Signature=3Zpj8PtTjNdtjlDgCvjIvMVUU50%3D\",\"title\":\"20150325130430_G2tR2.png\",\"link\":\"店铺首页链接(动态)\"}],\"checkBox\":[],\"titleType\":\"left\",\"pictureArrange\":\"50%\"}},{\"modelType\":\"drawHotSpot\",\"dataField\":{\"pictureList\":[{\"url\":\"http://static-legacy.oss-cn-hangzhou.aliyuncs.com/wx/crm/60842bf3-3ab9-4e1a-a90c-a3455e33e005.jpeg?Expires=1909466211&OSSAccessKeyId=LTAI4GL4nmf6wYbaDKzSBvgx&Signature=pL%2FIf2hLeY5VBD6nkB98zhBR8vI%3D\",\"title\":\"timg(1).jpeg\",\"link\":\"\",\"activeBoxs\":[{\"link\":\"\",\"title\":\"个人中心链接(动态)\",\"width\":102,\"height\":102,\"left\":0,\"top\":0,\"translateX\":241,\"translateY\":11}]}]}},{\"modelType\":\"auxiliaryLine\",\"dataField\":{\"backgroundColor\":\"#BB3838\",\"lineColor\":\"#D5CECE\"}},{\"modelType\":\"richText\",\"dataField\":{\"content\":\"1212121212\",\"backgroundColor\":\"#fff\"}},{\"modelType\":\"notice\",\"dataField\":{\"content\":\"12121212\"}},{\"modelType\":\"auxiliaryBlank\",\"dataField\":{\"backgroundColor\":\"#DEA3A3\",\"blankHeight\":\"111\"}},{\"modelType\":\"config\",\"dataField\":{\"title\":\"2\"}},{\"modelType\":\"productPage\",\"dataField\":{\"categoryList\":[{\"isSw\":true,\"mainClassTitle\":\"1\",\"subCategoryList\":[{\"subClassTitle\":\"1\",\"subLink\":\"127.0.0.1:8089/run\",\"subPicture\":\"http://static-legacy.oss-cn-hangzhou.aliyuncs.com/wx/crm/60842bf3-3ab9-4e1a-a90c-a3455e33e005.jpeg?Expires=1909466211&OSSAccessKeyId=LTAI4GL4nmf6wYbaDKzSBvgx&Signature=pL%2FIf2hLeY5VBD6nkB98zhBR8vI%3D\",\"subTitle\":\"店铺首页链接(动态)\"}],\"banner\":{\"mainLink\":\"127.0.0.1:8089/run\",\"mainHeaderPicture\":\"http://static-legacy.oss-cn-hangzhou.aliyuncs.com/wx/crm/70ec30b4-1f3e-4f94-9b58-5eaec81c89d6.png?Expires=1909562533&OSSAccessKeyId=LTAI4GL4nmf6wYbaDKzSBvgx&Signature=3Zpj8PtTjNdtjlDgCvjIvMVUU50%3D\",\"mainTitle\":\"店铺首页链接(动态)\"}}]}},{\"modelType\":\"shopFloatingIcon\",\"dataField\":{\"iconPicture\":\"http://static-legacy.oss-cn-hangzhou.aliyuncs.com/wx/crm/35c411e6-593d-4fd4-9798-d6ca58e6b9b4.jpeg?Expires=1909562537&OSSAccessKeyId=LTAI4GL4nmf6wYbaDKzSBvgx&Signature=qFs150R8Q9Bxe%2Frk1nwslro2b6E%3D\",\"iconLink\":\"店铺首页链接(动态)\"}}]"
//  console.log(content.trim('"'))

// let str = '"2_0_2"'
// console.log(str.replace(/(^["]+|["]+$)/g, ""))