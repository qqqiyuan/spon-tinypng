var currPath = process.cwd();
var src = currPath +'/*.*';
var dist = currPath +'/../dist';
var filename;
if(process.argv.length == 4) {
  // spon tinypng filename
  filename = process.argv[3]; 
}

if(filename) {
  src = currPath +'/'+ filename;
}

module.exports = {
  images: {
    src: src,
    dist: dist
  }
};