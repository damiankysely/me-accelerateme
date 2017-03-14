'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var gutil = require('gulp-util');
var ftp = require('vinyl-ftp');

//Load ftp details
var secrets = require('../secrets.json');
gulp.task('deploy', function() {

var conn = ftp.create( {
   host:     secrets.servers.production.serverhost,
   user:     secrets.servers.production.username,
   password: secrets.servers.production.password,
   parallel: 8,
   log: gutil.log
} );

var globs = [
  'dist/**'
];

return gulp.src(globs, {base: './dist', buffer: false})
  .pipe(conn.newer(secrets.servers.production.path))   // only upload newer files
  .pipe(conn.dest(secrets.servers.production.path));
});