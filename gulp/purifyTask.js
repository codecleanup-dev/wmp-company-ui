/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	function comppurify() {
		return gulp.src('./dist/comp/css/**/*.css')
			.pipe($.purifyCss(['./src/comp/**/*.js', './src/comp/**/*.html'], config.purifyOpt))
			.pipe(gulp.dest('./dist'));
	}
	comppurify.description = 'COMPANY 소스중 purify를 이용하여 html/js를 css와 대조후 불필요하거나 안쓰이는 css를 삭제합니다.'

	function logcomppurify() {
		return gulp.src('./dist/wmplog/css/**/*.css')
			.pipe($.purifyCss(['./src/wmplog/**/*.js', './src/wmplog/**/*.html'], config.purifyOpt))
			.pipe(gulp.dest('./dist'));
	}
	logcomppurify.description = 'WMP LOG 소스중 purify를 이용하여 html/js를 css와 대조후 불필요하거나 안쓰이는 css를 삭제합니다.'

	gulp.task(comppurify);
	gulp.task(logcomppurify);
};
