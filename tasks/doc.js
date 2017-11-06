// libs
const gulp = require('gulp');
const sassdoc = require('sassdoc');

// Input - Files / Folder
const inputdoc = './src/scss/**/*.scss';

// set options
const sassdocOptions = {
  dest: './build/sassdoc'
};

//
// ---- tasks
//

// Sass documentation
gulp.task('sassdoc', function () {
  return gulp
    .src(inputdoc)
    .pipe(sassdoc(sassdocOptions))
    .resume();
});
