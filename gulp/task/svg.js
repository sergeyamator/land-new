'use strict';


var config = {
  mode: {
    css: {     // Activate the «css» mode
      dest: '.',
      sprite: 'images/svg-sprite.svg',
      render: {
        scss: {
          dest: 'style/base/_svg-sprite.scss'
        }
      }
    }
  }
};


module.exports = function($) {
  $.gulp.task('svg', function() {

    return $.gulp.src('./source/images/svg/icons/*.svg')
      .pipe($.gp.svgSprite(config))
      .pipe($.gulp.dest('./source'));
  })
};


