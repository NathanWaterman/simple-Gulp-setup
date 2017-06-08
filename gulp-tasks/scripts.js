module.exports = function(gulp, plugins, config, bs, plumberErrorHandler) {

	gulp.task('scripts:app', function() {
		return gulp.src(config.src.js)
			.pipe(plugins.plumber(plumberErrorHandler))
			.pipe(plugins.jshint('.jshintrc', {fail: true}))
			.pipe(plugins.jshint.reporter('jshint-stylish'))
			.pipe(plugins.jshint.reporter('fail'))
			.pipe(plugins.concat('scripts.js'))
			.pipe(gulp.dest(config.build.js))
			.pipe(bs.stream());
	});

	gulp.task('scripts:vendor', function() {
		return gulp.src([config.src.jquery, config.src.bootstrapJs])
			.pipe(plugins.concat('vendor.js'))
			.pipe(gulp.dest(config.build.js));
	});

	gulp.task('scripts:build', function() {
		return gulp.src(config.src.js)
			.pipe(plugins.plumber(plumberErrorHandler))
			.pipe(plugins.jshint('.jshintrc', {fail: true}))
			.pipe(plugins.jshint.reporter('default'))
			.pipe(plugins.concat('scripts.js'))
			.pipe(plugins.uglify())
			.pipe(gulp.dest(config.build.js));
	});
};