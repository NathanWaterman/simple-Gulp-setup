module.exports = function(gulp, plugins, config) {
	gulp.task('copy:html', function() {
		gulp.src(config.src.html)
			.pipe(gulp.dest(config.build.path))
	});

	gulp.task('copy:fonts', function() {
		gulp.src([config.src.bootstrapFonts])
			.pipe(gulp.dest(config.build.fonts))
	});

	gulp.task('copy:images', function() {
		gulp.src([config.src.images])
			.pipe(gulp.dest(config.build.images))
	});
};