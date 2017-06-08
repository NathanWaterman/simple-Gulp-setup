var gulp 				= require('gulp'),
    path = require('path'),
    wrap = require('gulp-wrap'),
    concat = require('gulp-concat'),
     declare = require('gulp-declare'),
	requireDir 			= require('require-dir'),
	plugins 			= require('gulp-load-plugins')({
						  		pattern: ['gulp-*', 'gulp.*', 'del*'],
						  		replaceString: /\bgulp[\-.]/
							}),
    handlebars = require('gulp-compile-handlebars'),
    rename = require('gulp-rename'),
	runSequence 		= require('run-sequence').use(gulp),
	config 				= require('./gulp.config.js')(),
	bs					= require('browser-sync').create(),
	plumberErrorHandler = { errorHandler: plugins.notify.onError({
						      title: 'Gulp error',
						      message: "Error: <%= error.message %>"
						    })};

require('./gulp-tasks/clean')(gulp, plugins, config);
require('./gulp-tasks/scripts')(gulp, plugins, config, bs, plumberErrorHandler);
require('./gulp-tasks/sass')(gulp, plugins, config, bs, plumberErrorHandler);
require('./gulp-tasks/copy')(gulp, plugins, config);
require('./gulp-tasks/serve')(gulp, plugins, config, bs);
require('./gulp-tasks/watch')(gulp, plugins, config, bs);


gulp.task('compile-templates', function() {
  gulp.src('partials/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'HBTemplates',
      noRedeclare: true
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('script'));
});



gulp.task('default', function(cb) {
	runSequence('clean', ['copy:html', 'copy:fonts', 'copy:images', 'scripts:vendor', 'scripts:app', 'sass:vendor', 'sass:app', 'serve', 'watch', 'compile-templates'], cb);
});

gulp.task('build', function(cb) {
	runSequence('clean', ['copy:html', 'copy:fonts', 'copy:images', 'scripts:vendor', 'scripts:build', 'sass:vendor', 'sass:build','compile-templates'], cb);
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.hbs', ['compile-templates']);
});

