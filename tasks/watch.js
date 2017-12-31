// libs
const gulp = require('gulp');

// Input - Folder
const inputFolderStyle = './src/scss/**/*.scss';
const inputFolderDocs = './src/scss/**/*.scss';

gulp.task('sass:watch', function () {
  gulp.watch(inputFolderStyle, ['css-compile-style']);
});
