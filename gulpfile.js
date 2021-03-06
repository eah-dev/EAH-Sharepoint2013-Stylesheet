// libs
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// gulp-task
var requireDir = require('require-dir');
requireDir('./gulp-tasks');

//
// ---- tasks
//

// final step
// gulp.task - 'build'
gulp.task('build', function () {
  gulp.start(['css-compile-style', 'css-minify-style']); // starts only after 'css-lint-style'
});
gulp.task('build-docs', ['css-lint-docs'], function () {
  gulp.start(['css-compile-docs', 'css-minify-docs', 'copy']);
});
// copy all files to the sharepoint server
// gulp.task - 'copyToSharePoint'
gulp.task('copyToSharePoint', ['copyToSharePoint:css']);
gulp.task('copyToSharePointDev', ['copyToSharePointDev:css']);
