module.exports = function(gulp, plugins, config, bs) {
	gulp.task('watch', function () {
    	gulp.watch(config.src.sass + '*.scss', ['sass:app']);
    	gulp.watch(config.src.js, ['scripts:app']);
		gulp.watch(config.src.html, ['copy:html']).on('change', bs.reload);
		gulp.watch(config.src.images, ['copy:images']).on('change', bs.reload);
	});
};