var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');

var jsxFiles = './assets/**/*.jsx';
var jsFiles = './assets/**/*.js';


gulp.task('browserify', function() {
	browserifyShare();
	});

function browserifyShare(){
	var b = browserify('./assets/js/index.js', {debug: true})
	b = watchify(b);
	b.on('update', function(){
		bundleShare(b);
		});
	bundleShare(b);
}

function bundleShare(b) {
	b.bundle()
	.pipe(source('main.js'))
	.pipe(gulp.dest('./public/javascripts'));
}

// Tasks
gulp.task('build', ['browserify']);
gulp.task('default', ['build']);
