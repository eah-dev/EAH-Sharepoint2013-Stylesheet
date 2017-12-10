// libs
const gulp = require('gulp');

//
// ---- tasks
//

// gulp.task - 'copy:images'
gulp.task('copy:images', function () {
  return gulp.src('./src/images/**')
  .pipe(gulp.dest('./build/layouts/eah-jena/images'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/images'));
});

// gulp.task - 'copy:bootstrapfont'
gulp.task('copy:bootstrapfont', function () {
  return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
  .pipe(gulp.dest('./build/layouts/eah-jena/assets/bootstrap/fonts'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/assets/bootstrap/fonts'));
});

// gulp.task - 'copy:bootstrapjs'
gulp.task('copy:bootstrapjs', function () {
  return gulp.src('./node_modules/bootstrap-sass/assets/javascripts/*')
  .pipe(gulp.dest('./build/layouts/eah-jena/assets/bootstrap/js'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/assets/bootstrap/js'));
});

// gulp.task - 'copy:bootstrapcolorpicker'
gulp.task('copy:bootstrapcolorpicker', function () {
  return gulp.src('./node_modules/bootstrap-colorpicker/dist/**')
  .pipe(gulp.dest('./build/layouts/eah-jena/assets/bootstrap-colorpicker'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/assets/bootstrap-colorpicker'));
});

// gulp.task - 'copy:fontawesomefonts'
gulp.task('copy:fontawesomefonts', function () {
  return gulp.src('./node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest('./build/layouts/eah-jena/assets/font-awesome/fonts/'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/assets/font-awesome/fonts/'));
});

// gulp.task - 'copy:robotofontface'
gulp.task('copy:robotofontface', function () {
  return gulp.src('./node_modules/roboto-fontface/fonts/**')
  .pipe(gulp.dest('./build/layouts/eah-jena/assets/roboto-fontface/fonts/'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/assets/roboto-fontface/fonts/'));
});

// gulp.task - 'copy:ionicons'
gulp.task('copy:ionicons', function () {
  return gulp.src('./node_modules/ionicons/fonts/**')
  .pipe(gulp.dest('./build/layouts/eah-jena/assets/ionicons/fonts/'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/assets/ionicons/fonts/'));
});

// gulp.task - 'copy:jquery'
gulp.task('copy:jquery', function () {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./build/layouts/eah-jena/assets/jquery/'))
  .pipe(gulp.dest('./test/_catalogs/masterpage/layouts/eah-jena/assets/jquery/'));
});

// gulp.task - 'copy'
gulp.task('copy',['clean'], function () {
  gulp.start(
    [
      'JavaScriptCompress',
      'copy:images',
      'copy:bootstrapfont',
      'copy:bootstrapjs',
      'copy:bootstrapcolorpicker',
      'copy:fontawesomefonts',
      'copy:robotofontface',
      'copy:ionicons',
      'copy:jquery'
    ]
  ); // starts only after 'clean'
});
