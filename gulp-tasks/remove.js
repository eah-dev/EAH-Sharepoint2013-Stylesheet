const gulp = require('gulp');
const del = require('del');

const outputFileStyle = './dist/css/eah-jena-style.css';
const outputFileStyleMin = './dist/css/eah-jena-style.min.css';
const outputFileDocs = './assets/eah-jena/css/eah-jena-docs.css';
const outputFileDocsMin = './assets/eah-jena/css/eah-jena-docs.min.css';

//
// ---- tasks
//

// gulp.task - 'clean'
gulp.task('clean', function () {
  return del([
    './dist',
    './_site',
    './assets/bootstrap',
    './assets/bootstrap-colorpicker',
    './assets/eah-jena',
    './assets/font-awesome',
    './assets/ionicons',
    './assets/jquery',
    './assets/roboto-fontface',
  ])
  .then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});

// gulp.task - 'clean-css-style'
gulp.task('clean-css-style', function () {
  return del([
    outputFileStyle
  ])
  .then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});
// gulp.task - 'clean-css-minify-style'
gulp.task('clean-css-minify-style', function () {
  return del([
    outputFileStyleMin
  ])
  .then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});
// gulp.task - 'clean-css-docs'
gulp.task('clean-css-docs', function () {
  return del([
    outputFileDocs
  ])
  .then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});
// gulp.task - 'clean-css-minify-docs'
gulp.task('clean-css-minify-docs', function () {
  return del([
    outputFileDocsMin
  ])
  .then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});
