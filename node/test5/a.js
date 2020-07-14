const mkdirp = require('mkdirp')
 
mkdirp('./tmp/foo/b.js').then(made =>
  console.log(`==== ${made}`))

