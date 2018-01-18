// libs
const gulp = require('gulp');
const spsave = require('gulp-spsave');

// sensitive data stored in external file:
const creds = require("../spsave-settings.js");

// sharepoint server url
const spsiteUrl = 'https://redaktion.eah-jena.de';
const spsiteUrlDev = 'http://redaktion-test.eah-jena.de';

// lokale - Files / Folder
const folderLocalCss = './dist/css/*.css';
const folderLocalJs = './dist/js/*.js';

// auf dem Sharpoint-Server - Files / Folder
const folderServerCss = '_catalogs/masterpage/layouts/eah-jena/css/';
const folderServerJs = '_catalogs/masterpage/layouts/eah-jena/js/';

//
// ---- tasks
//

// prod
// gulp.task - 'copyToSharePoint:css'
gulp.task('copyToSharePoint:css', ['css-minify-style'], function(){
  return gulp.src(folderLocalCss)
    .pipe(spsave({
        siteUrl: spsiteUrl,
        folder: folderServerCss
    }, creds));
});

// prod
// gulp.task - 'copyToSharePoint:js'
gulp.task('copyToSharePoint:js', ['JavaScriptCompress'], function(){
  return gulp.src(folderLocalJs)
    .pipe(spsave({
        siteUrl: spsiteUrl,
        folder: folderServerJs
    }, creds));
});

// dev
// gulp.task - 'copyToSharePointDev:css'
gulp.task('copyToSharePointDev:css', ['css-style'], function(){
  return gulp.src(folderLocalCss)
    .pipe(spsave({
        siteUrl: spsiteUrlDev,
        folder: folderServerCss
    }, creds));
});

// dev
// gulp.task - 'copyToSharePointDev:js'
gulp.task('copyToSharePointDev:js', ['JavaScriptCompress'], function(){
  return gulp.src(folderLocalJs)
    .pipe(spsave({
        siteUrl: spsiteUrlDev,
        folder: folderServerJs
    }, creds));
});
