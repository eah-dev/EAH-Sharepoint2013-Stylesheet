const gulp = require('gulp');
const del = require('del');

//
// ---- tasks
//

// gulp.task - 'clean'
gulp.task('clean', function () {
  return del([
    './build',
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
