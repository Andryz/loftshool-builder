'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.process'));
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.blog'));
    $.gulp.watch('./source/js/**/*.js', $.gulp.series('js.preload'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.jade', $.gulp.series('jade'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy.image'));
  });
};
