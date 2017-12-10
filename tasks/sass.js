// libs
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const gulpStylelint = require('gulp-stylelint');

// Input - Files / Folder
const inputStyle = './src/scss/eah-jena-style.scss';
const inputdoc = './src/scss/**/*.scss';

// Output - Folder
const outputStyle = './build/layouts/eah-jena/css';
const outputStyleTest = './test/_catalogs/masterpage/layouts/eah-jena/css';
const reportOutputDir = 'build/reports/lint';

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

// gulp.task - 'styles'
gulp.task('styles', function () {
  return gulp
  .src(inputStyle)
  // .pipe(sourcemaps.init())
  .pipe(sass(sassOptions).on('error', sass.logError))
  // .pipe(sourcemaps.write())
  .pipe(gulp.dest(outputStyle))
  .pipe(gulp.dest(outputStyleTest))
});

gulp.task('styles-min', function () {
  return gulp
    .src(inputStyle)
    .pipe(sass(sassOptionsmin).on('error', sass.logError))
    .pipe(gulp.dest(outputStyle))
    .pipe(gulp.dest(outputStyleTest))
});

// lint-css
gulp.task('lint-css', function lintCssTask() {
  return gulp
    .src(inputdoc)
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: reportOutputDir,
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report.json'},
        {formatter: 'string', save: 'sass-report.txt'}
      ],
      debug: true
    }));
});
