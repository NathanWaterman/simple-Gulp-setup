module.exports = function(gulp, plugins, config, bs) {

	gulp.task('serve', function() {
		bs.init(config.browserSync);
		bs.reload();
	});
};