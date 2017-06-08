module.exports = function(gulp, plugins, config) {

	gulp.task('clean', function() {
		return plugins.del([config.build.path]);
	});
};