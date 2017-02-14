'use strict';

module.exports = function() {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/images/sprite/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite.scss'
      }));

    var imgStream = spriteData.img
    // DEV: We must buffer our stream into a Buffer for `imagemin`
      .pipe($.gulp.dest($.config.root + '/assets/img'));

    var cssStream = spriteData.css
    // DEV: We must buffer our stream into a Buffer for `imagemin`
      .pipe($.gulp.dest('./source/style'));

    return spriteData;
  })
};
