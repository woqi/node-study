const fs = require('fs')
const readSteam = fs.createReadStream('./data/16.json')
var count = 0
var str = ''
readSteam.on('data', data => {
  str += data;
  count++;
})
readSteam.on('end', () => {
  console.log(str)
  console.log(count)
})
readSteam.on('error', (err) => {
  console.log(err)
})