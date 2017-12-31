// libs
const gulp = require('gulp');

// Input - Folder
const inputFolderStyle = './src/scss/**/*.scss';
const inputFolderDocs = './src/scss/**/*.scss';

gulp.task('sass:watch', function () {
  gulp.watch(inputFolderStyle, ['css-compile-style']);
});

// Watch task
gulp.task('watch', function () {
  gulp.watch(inputFolderStyle, ['copyToSharePoint:css']);
});
gulp.task('watchDev', function () {
  gulp.watch(inputFolderStyle, ['copyToSharePointDev:css']);
});
