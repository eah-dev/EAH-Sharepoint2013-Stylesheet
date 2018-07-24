// libs
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

// basename
const basenameStyle = 'eah-jena-style';
const basenameDoc = 'eah-jena-docs';

// Input - Files
const inputFileStyle = './src/scss/eah-jena-style.scss';
const inputFileDoc = './src/scss/eah-jena-docs.scss';

// Input - Folder
const inputFolderStyle = './src/scss/**/*.scss';
const inputFolderDocs = './src/scss/**/*.scss';

// Output - Folder
const outputFolderStyle = './dist/css/';
const outputFolderDocs = './assets/eah-jena/css/';

// set options
const sassOptions = {
  errLogToConsole: true
};
const sassOptionsmin = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

//
// ---- tasks
//

// gulp.task - 'compile'
gulp.task('css-compile-style', ['clean-css-style'], function () {
  return gulp
  .src(inputFileStyle)
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(gulp.dest(outputFolderStyle))
});
gulp.task('css-compile-docs', ['clean-css-docs'], function () {
  return gulp
  .src(inputFileDoc)
  .pipe(sass(sassOptions).on('error', sass.logError))
  .pipe(gulp.dest(outputFolderDocs))
});
// gulp.task - 'compile'
gulp.task('css-minify-style', ['clean-css-minify-style'], function () {
  return gulp
    .src(inputFileStyle)
    .pipe(sass(sassOptionsmin).on('error', sass.logError))
    .pipe(rename({              //renames the concatenated CSS file
      basename : basenameStyle, //the base name of the renamed CSS file
      extname : '.min.css'      //the extension fo the renamed CSS file
    }))
    .pipe(gulp.dest(outputFolderStyle))
});
gulp.task('css-minify-docs', ['clean-css-minify-docs'], function () {
  return gulp
    .src(inputFileDoc)
    .pipe(sass(sassOptionsmin).on('error', sass.logError))
    .pipe(rename({              //renames the concatenated CSS file
      basename : basenameDoc,   //the base name of the renamed CSS file
      extname : '.min.css'      //the extension fo the renamed CSS file
    }))
    .pipe(gulp.dest(outputFolderDocs))
});
