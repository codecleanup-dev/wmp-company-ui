const browserSync = require('browser-sync').create();
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	function compimgs() {
		return gulp
			.src(config.compImgs.src)
			.pipe(gulp.dest(config.compImgs.dest))
	}

	function compfonts() {
		return gulp
			.src(config.compFonts.src)
			.pipe(gulp.dest(config.compFonts.dest))
	}

	function logimgs() {
		return gulp
			.src(config.logImgs.src)
			.pipe(gulp.dest(config.logImgs.dest))
	}

	function logfonts() {
		return gulp
			.src(config.logFonts.src)
			.pipe(gulp.dest(config.logFonts.dest))
	}

	function logJs() {
	return gulp
		.src(config.logJs.src)
		.pipe(gulp.dest(config.logJs.dest))
	}

	gulp.task(compimgs);
	gulp.task(compfonts);
	gulp.task(logimgs);
	gulp.task(logfonts);
	gulp.task(logJs);

};
