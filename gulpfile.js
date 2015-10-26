var gulp = require('gulp');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var livereload = require('gulp-livereload');


var jsxFiles = './assets/**/*.jsx';
var jsFiles = './assets/**/*.js';


gulp.task('browserify-watch', function() {
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
	.pipe(gulp.dest('./public/javascripts'))
	.pipe(livereload());
}

// Tasks
gulp.task('watch', ['browserify-watch'], function() {
	// Start live reload server
	livereload.listen();
	});

gulp.task('default', ['watch']);
