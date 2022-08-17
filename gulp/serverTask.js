const	log = require('fancy-log'),
			colors = require('ansi-colors'),
			browserSync = require('browser-sync').create(),
			touch = require('gulp-touch-cmd'),
			reload = browserSync.reload;

/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	function serverInit() {
		return browserSync.init({
			server: {
				baseDir: "./",
				port: '3000',
				index: '/src/wmplog/index.html'
			}
		});
	}
	serverInit.description = 'localhost port:3000 으로 로컬서버를 시작합니다.'

	function watch() {
		let watcher = {
			compScss: gulp.watch(config.compScss.src, gulp.task('compsass')),
			compHtml: gulp.watch(config.compHtml.src, gulp.task('comphtml')),
			compImgs: gulp.watch(config.compImgs.src, gulp.task('compimgs')),
			compJs: gulp.watch(config.compJs.src, gulp.task('compjs')),
			compFonts: gulp.watch(config.compFonts.src, gulp.task('compfonts')),
			imgSprite: gulp.watch(config.imgSprite.src, gulp.task('imgSprite')),
			logScss: gulp.watch(config.logScss.src, gulp.task('logsass')),
			logHtml: gulp.watch(config.logHtml.src, gulp.task('loghtml')),
			logImgs: gulp.watch(config.logImgs.src, gulp.task('logimgs')),
			logJs: gulp.watch(config.logJs.src, gulp.task('logJs')),
			logFonts: gulp.watch(config.logFonts.src, gulp.task('logfonts')),
			logimgSprite: gulp.watch(config.logimgSprite.src, gulp.task('logimgSprite')),
			mSvg: gulp.watch(config.mSvg.src, gulp.task('mBuildsvg')),
			// htmlLint: gulp.watch(config.logHtml.src, gulp.task('htmlLint')),
		};

		for (let key in watcher) {
			watcher[key].on('change', reload);
			watcher[key].on('add', path => log('File', colors.yellow(path), 'has been', colors.green('added')))
			watcher[key].on('change', path => log('File', colors.yellow(path), 'has been', colors.green('changed')))
			watcher[key].on('unlink', path => log('File', colors.yellow(path), 'has been', colors.green('removed')))
			watcher[key].on('addDir', path => log('File', colors.yellow(path), 'has been', colors.green('added')))
			watcher[key].on('unlinkDir', path => log('Directory', colors.yellow(path), 'has been', colors.green('removed')))
			watcher[key].on('error', error => log('Watcher error:', colors.red({
				error
			})))
		}
	}
	watch.description = 'html/SCSS/SVG 파일의 변경점을 감시합니다.'

	gulp.task(watch);
	gulp.task('server', gulp.parallel(serverInit, watch));

};
