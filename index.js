var gulp = require('gulp');
var tiny = require('./tinypng.js');
var config = require('./config.js').images;

module.exports = function(spon) {
  spon.cli
    .command('tinypng')
    .description('spon tinypng')
    .action(function() {
      gulp.task('tinypng', function() {
        gulp.src(config.src)
            .pipe(tiny())
            .pipe(gulp.dest(config.dist));
          
      });
      gulp.start('tinypng');
    });
}