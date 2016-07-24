var currPath = process.cwd();
var src = currPath +'/img/*.*';
var dist = currPath +'/dist';

if(process.argv.length == 4) {

  // spon tinypng src/img
  var argvName = process.argv[3]; 

} else if(process.argv.length == 5) {

  // spon tinypng file src/img/sprite.png
  var filepath = process.argv[4];

}

if(argvName) {
  src = currPath +'/'+ argvName +'/*.*';
  dist = currPath +'/'+ argvName +'/../dist'; 
}
if(filepath) {
  src = currPath +'/'+ filepath;
  dist = src +'/../../dist';
}

module.exports = {
  images: {
    src: src,
    dist: dist
  }
};