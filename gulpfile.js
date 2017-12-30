// libs
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

// gulp-task
const requireDir = require('require-dir');
requireDir('./tasks');

//
// ---- tasks
//

// Watch task
gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['copyToSharePoint:css']);
});
gulp.task('watchDev', function () {
  gulp.watch('./src/scss/**/*.scss', ['copyToSharePointDev:css']);
});

// final step
// gulp.task - 'build'
gulp.task('build', ['lint-css'], function () {
  gulp.start(['styles-min', 'copy']); // starts only after 'lint-css'
});

// copy all files to the sharepoint server
// gulp.task - 'copyToSharePoint'
gulp.task('copyToSharePoint', ['copyToSharePoint:css']);
gulp.task('copyToSharePointDev', ['copyToSharePointDev:css']);
