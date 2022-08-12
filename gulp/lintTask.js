const htmllint = require('gulp-htmllint'),
	log = console.log,
	colors = require('ansi-colors');
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	// HTML LINTER
	function htmlLint() {
		log(colors.red('---------------START HTML LINTING---------------'));
		return gulp
			// .src([config.pcHtml.src, config.mHtml.src, config.wstyleHtml.src]) //linting 할 파일 경로
			.src([config.logHtml.src])
			.pipe(htmllint({}, htmllintReporter))
	}

	function htmllintReporter(filepath, issues) {
		if (issues.length > 0) {
			issues.forEach((issue) =>{
				log(colors.cyan('[gulp-htmllint] ') + colors.white(filepath + ' [' + issue.line + ']: ') + colors.red('(' + issue.code + ') ' + issue.msg));
			});
			process.exitCode = 1;
		}
	}

	gulp.task(htmlLint);
};
