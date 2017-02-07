'use strict';

module.exports = function() {
  $.gulp.task('copy:fonts', function() {
    return $.gulp.src('./source/fonts/**/*.*', { since: $.gulp.lastRun('copy:fonts') })
      .pipe($.gulp.dest($.config.root + '/assets/fonts'));
  });
};
