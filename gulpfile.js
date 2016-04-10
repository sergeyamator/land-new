'use strict';

var $ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/path.tasks'),
    template: require('./gulp/path.template'),
    foundation: require('./gulp/path.foundation'),
    app: require('./gulp/path.app')
  },
  gulp: require('gulp'),
  rimraf: require('rimraf'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')()
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)($);
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'jade',
    'svg',
    'js.foundation',
    'js.process',
    'copy.fonts',
    'copy.image'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
