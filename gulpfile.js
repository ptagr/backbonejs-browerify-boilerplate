var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');


gulp.task('browserify', function() {
  var b = browserify('./assets/js/index.js', {debug: true})
  return b.bundle()
    .pipe(source('backbone-tutorial.js'))
    .pipe(gulp.dest('./public/javascripts'))
});

gulp.task('watch', function() {
  gulp.watch('./assets/**/*.js', ['browserify']);
});

// Tasks
gulp.task('build', ['browserify']);
gulp.task('default', ['build', 'watch']);
