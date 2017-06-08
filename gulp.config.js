module.exports = function () {
	var source = {
			js: './src/js/**/*.js',
			sass: './src/scss/',
			html: './src/*.html',
			bootstrapFonts: './node_modules/bootstrap-sass/assets/fonts/**/*',
			images: './src/images/',
			jquery: './node_modules/jquery/dist/jquery.min.js',
			bootstrapJs: './node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'
		},
		build = {
			path: './build/',
			js: './build/js/',
			css: './build/css/',
			fonts: './build/assets/fonts',
			images: './build/assets/images'
		},
		browserSync = {
			port: 4000,
			server: {
				baseDir: build.path
			}
		},
		config = {
			src: source,
			build: build,
			browserSync: browserSync
		};

	return config;

};