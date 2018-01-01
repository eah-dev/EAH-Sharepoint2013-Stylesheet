// libs
const gulp = require('gulp');

//
// ---- tasks
//

// gulp.task - 'copy:image'
gulp.task('copy:image', function () {
  return gulp.src('./src/images/**')
  .pipe(gulp.dest('./assets/eah-jena/images'));
});

// gulp.task - 'copy:bootstrapfont'
gulp.task('copy:bootstrapfont', function () {
  return gulp.src('./node_modules/bootstrap-sass/assets/fonts/bootstrap/**')
  .pipe(gulp.dest('./assets/bootstrap/fonts'));
});

// gulp.task - 'copy:bootstrapjs'
gulp.task('copy:bootstrapjs', function () {
  return gulp.src('./node_modules/bootstrap-sass/assets/javascripts/*')
  .pipe(gulp.dest('./assets/bootstrap/js'));
});

// gulp.task - 'copy:bootstrapcolorpicker'
gulp.task('copy:bootstrapcolorpicker', function () {
  return gulp.src('./node_modules/bootstrap-colorpicker/dist/**')
  .pipe(gulp.dest('./assets/bootstrap-colorpicker'));
});

// gulp.task - 'copy:fontawesomefonts'
gulp.task('copy:fontawesomefonts', function () {
  return gulp.src('./node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest('./assets/font-awesome/fonts/'));
});

// gulp.task - 'copy:robotofontface'
gulp.task('copy:robotofontface', function () {
  return gulp.src('./node_modules/roboto-fontface/fonts/Roboto/**')
  .pipe(gulp.dest('./assets/roboto-fontface/fonts/Roboto'));
});

// gulp.task - 'copy:ionicons'
gulp.task('copy:ionicons', function () {
  return gulp.src('./node_modules/ionicons/fonts/**')
  .pipe(gulp.dest('./assets/ionicons/fonts/'));
});

// gulp.task - 'copy:jquery'
gulp.task('copy:jquery', function () {
  return gulp.src('./node_modules/jquery/dist/jquery.min.js')
  .pipe(gulp.dest('./assets/jquery/'));
});

// gulp.task - 'copy:cssdocs'
gulp.task('copy:cssdocs', function () {
  return gulp.src('./src/scss/eah-jena-doc.scss')
  .pipe(gulp.dest('./assets/eah-jena/css'));
});

// gulp.task - 'copy'
gulp.task('copy',['clean'], function () {
  gulp.start(
    [
      'JavaScriptCompress',
      'copy:image',
      'copy:bootstrapfont',
      'copy:bootstrapjs',
      'copy:bootstrapcolorpicker',
      'copy:fontawesomefonts',
      'copy:robotofontface',
      'copy:ionicons',
      'copy:jquery',
      'copy:cssdocs'
    ]
  ); // starts only after 'clean'
});
