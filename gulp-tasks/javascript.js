// libs
const gulp = require('gulp');

// Minify JavaScript with UglifyJS2
const minify = require('gulp-minify');

// Input - Files / Folder
const inputJavaScript = './src/js/*';

// Output - Folder
const outputJavaScriptBuild = './dist/js';

//
// ---- tasks
//

// gulp.task - 'JavaScriptCompress'
gulp.task('JavaScriptCompress', function () {
  gulp.src(inputJavaScript)
    .pipe(minify({
      ext: {
        src: '.js',
        min: '.min.js'
      },
      exclude: ['tasks'],
      ignoreFiles: ['.min.js']
    }))
    .pipe(gulp.dest(outputJavaScriptBuild))
});
