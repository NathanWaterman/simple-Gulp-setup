module.exports = function(gulp, plugins, config, bs) {

	gulp.task('sass:vendor', function() {
		return plugins.rubySass(config.src.sass + 'vendor.scss', {
				compass: true, 
				style: 'compressed'
			})
			.on('error', plugins.rubySass.logError)
			.pipe(gulp.dest(config.build.css))
	});

	gulp.task('sass:app', function() {
		return plugins.rubySass(config.src.sass + 'styles.scss', {
				compass: true, 
				style: 'expanded', 
				stopOnError: true
			})
			.on('error', plugins.rubySass.logError)
			.pipe(plugins.csslint('csslintrc.json'))
			.pipe(gulp.dest(config.build.css))
			.pipe(bs.stream());

	});

	gulp.task('sass:build', function() {
		return plugins.rubySass(config.src.sass + 'styles.scss', {
				compass: true, 
				style: 'compressed', 
				stopOnError: true
			})
			.on('error', plugins.rubySass.logError)
			.pipe(plugins.csslint('csslintrc.json'))
			.pipe(gulp.dest(config.build.css));

	});

	gulp.task('watch:sass', function () {
    	return gulp.watch(config.src.sass, ['sass:app']);
	});
};