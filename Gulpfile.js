var gulp = require('gulp');
var uglify = require('gulp-uglify');
var htmlreplace = require('gulp-html-replace');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');
var gutil = require('gulp-util');

var babelify = require('babelify');

var streamify = require('gulp-streamify');

var path = {
  HTML: 'src/index.html',
  MINIFIED_OUT: 'build.min.js',
  OUT: 'build.js',
  DEST_BUILD: 'public/javascripts',
  DEST_SRC: 'public/javascripts',
  JS_PATH: './assets/js/**/*',
  ENTRY_POINT: './assets/js/index.js'
};



gulp.task('build', function(){
  browserify({
    entries: [path.ENTRY_POINT],
    debug: true,
  })
  .transform("babelify", {presets: ["es2015","stage-0", "react"]})
    .bundle()
    .pipe(source(path.MINIFIED_OUT))
    .pipe(gulp.dest(path.DEST_BUILD));
});

gulp.task('watch', function() {
  gulp.watch(path.JS_PATH, ['build']);
});


gulp.task('default', ['watch']);
