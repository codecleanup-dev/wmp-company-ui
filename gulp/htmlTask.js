const	log = require('fancy-log'),
			colors = require('ansi-colors'),
			browserSync = require('browser-sync').create(),
			fileinclude = require('gulp-file-include'),
			reload = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	function comphtml() {
		return gulp
			.src(config.compHtml.src)
			.pipe($.plumber({
				errorHandler: (err) => {
					console.log('COMPANY html Task 수행중 에러가 발생했습니다.');
				}
			}))
			.pipe(fileinclude({
				prefix: '@@',
				basepath: '@file'
			}))
			.pipe(gulp.dest(config.compHtml.dest))
			.pipe(browserSync.stream());
	}

	function loghtml() {
		return gulp
			.src(config.logHtml.src)
			.pipe($.plumber({
				errorHandler: (err) => {
					console.log('WMP LOG html Task 수행중 에러가 발생했습니다.');
				}
			}))
			.pipe(fileinclude({
				prefix: '@@',
				basepath: '@file'
			}))
			.pipe(gulp.dest(config.logHtml.dest))
			.pipe(browserSync.stream());
	}

	gulp.task(comphtml);
	gulp.task(loghtml);

};
