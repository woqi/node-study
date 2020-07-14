const fs = require('fs')
let readStream = fs.createReadStream('./1.jpg')
let writeStream =fs.createWriteStream('./data/1.jpg')//可重新命名
readStream.pipe(writeStream)