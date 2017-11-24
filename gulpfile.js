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
// gulp.task - 'prod'
gulp.task('prod', ['lint-css'], function () {
  gulp.start(['styles-min', 'sassdoc']); // starts only after 'lint-css'
});

// copy all files to the sharepoint server
// gulp.task - 'copyToSharePoint'
gulp.task('copyToSharePoint', ['copyToSharePoint:css']);
gulp.task('copyToSharePointDev', ['copyToSharePointDev:css']);

// Watch Sass & Serve
gulp.task('serve', ['copy'], function() {
  gulp.start(['styles']);
  browserSync.init({
      server: "./test/"
  });
  gulp.watch(['src/scss/*.scss','src/scss/elements/*.scss'], ['styles']).on('change', browserSync.reload);
  gulp.watch("./test/*.html").on('change', browserSync.reload);
});
