const	log = require('fancy-log'),
			colors = require('ansi-colors'),
			browserSync = require('browser-sync').create(),
			reload = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	function compreview() {
		return gulp
			.src(config.compreview.src)
			.pipe($.replace('/src/comp/views/', '/review/company/src/comp/views/'))
			.pipe(gulp.dest(config.compreview.dest))
	}
	compreview.description = 'Review 서버 COMPANY 배포전용 url 변경'

	function compsvgReviewPath() {
		return gulp
			.src(config.compSvgReviewPath.src)
			.pipe($.replace('../../../dist', '/dist'))
			.pipe(gulp.dest(config.compSvgReviewPath.dest))
	}
	compsvgReviewPath.description = 'Review 서버 COMPANY SVG가이드 전용 url 변경'

	function logreview() {
		return gulp
			.src(config.logreview.src)
			.pipe($.replace('/src/wmplog/views/', '/review/company/src/wmplog/views/'))
			.pipe(gulp.dest(config.logreview.dest))
	}
	logreview.description = 'Review 서버 WMP LOG 배포전용 url 변경'

	function logsvgReviewPath() {
		return gulp
			.src(config.logSvgReviewPath.src)
			.pipe($.replace('../../../dist', '/dist'))
			.pipe(gulp.dest(config.logSvgReviewPath.dest))
	}
	logsvgReviewPath.description = 'Review 서버 WMP LOG SVG가이드 전용 url 변경'

	gulp.task(compreview);
	gulp.task(compsvgReviewPath);
	gulp.task(logreview);
	gulp.task(logsvgReviewPath);
	gulp.task('review', gulp.parallel('compreview', 'compfonts', 'compimgs', 'compsvgReviewPath', 'logreview', 'logfonts', 'logimgs', 'logsvgReviewPath'));

};
