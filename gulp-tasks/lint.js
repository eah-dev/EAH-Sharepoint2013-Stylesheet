// libs
const gulp = require('gulp');

// Input - Files
const inputFileStyle = './src/scss/eah-jena-style.scss';
const inputFileDoc = './src/scss/eah-jena-docs.scss';

// Input - Folder
const inputFolderStyle = './src/scss/**/*.scss';
const inputFolderDocs = './src/scss/**/*.scss';

// report - Output - Folder
const reportOutputDir = 'build/reports/lint';

//
// ---- tasks
//

// lint-css for style file
gulp.task('css-lint-style', function lintCssTask() {
  const gulpStylelint = require('gulp-stylelint');
  const myStylelintFormatter = require('my-stylelint-formatter');
  return gulp
    .src(inputFolderStyle)
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: reportOutputDir,
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report.json'},
        {formatter: myStylelintFormatter, save: 'sass-report.txt'}
      ],
      debug: true
    }));
});

// lint-css for doc file
gulp.task('css-lint-docs', function lintCssTask() {
  return gulp
    .src(inputFolderDocs)
    .pipe(gulpStylelint({
      failAfterError: true,
      reportOutputDir: reportOutputDir,
      reporters: [
        {formatter: 'verbose', console: true},
        {formatter: 'json', save: 'report-doc.json'},
        {formatter: 'string', save: 'sass-report-doc.txt'}
      ],
      debug: true
    }));
});
