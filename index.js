var gulp = require('gulp');
var tiny = require('./tinypng.js');
var config = require('./config.js').images;

module.exports = function(spon) {
  spon.cli
    .command('tinypng')
    .description('spon tinypng')
    .action(function() {
      
      gulp.task('tinypng', function() {
        if( (process.argv.length < 5 )|| (process.argv.length == 5 && process.argv[3] == 'img') ){
          gulp.src(config.src)
            .pipe(tiny())
            .pipe(gulp.dest(config.dist));
        } else {
          console.log('Command Error!')
        } 
      });

      gulp.start('tinypng');
    });
}
