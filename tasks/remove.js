const gulp = require('gulp');
const del = require('del');

//
// ---- tasks
//

// gulp.task - 'clean'
gulp.task('clean', function () {
  return del([
    './build',
    './test/_catalogs/masterpage/layouts/eah-jena/assets'
  ])
  .then(paths => {
    console.log('Deleted files and folders:\n', paths.join('\n'));
  });
});
