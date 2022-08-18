const	log = require('fancy-log'),
			colors = require('ansi-colors'),
			isProduction = require('./config/gulp.env'),
			path = require('path'),
			browserSync = require('browser-sync').create(),
			touch = require('gulp-touch-cmd'), //lucy
			reload = browserSync.reload;
/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {


	const onError = (err) => {
		if (err) {
			let exitCode = 1;
			console.log(colors.red('[ERROR]'), 'gulp build task failed', err);
			console.log(colors.red('[FAIL]'), 'gulp build task failed - exiting with code ' + exitCode);
			return process.exit(exitCode);
		}
		//throw new Error(colors.green("info") + '::' + err);
	};

	// lucy 삭제
	// var displayError = function(error) {

  //   var errorString = '[' + error.plugin + ']';
  //   errorString += ' ' + error.message.replace("\n",'\n'); // Removes new line at the end - Q nope

  //   // If the error contains the filename or line number add it to the string
  //   if(error.fileName)
  //       errorString += ' in ' + error.fileName;

  //   if(error.lineNumber)
  //       errorString += ' on line ' + error.lineNumber;

  //   // This will output an error like the following:
  //   // [gulp-sass] error message in file_name on line 1
  //   console.error(errorString);
	// }

	function compsass() {
		return gulp
			.src(config.compScss.src)
			.pipe($.plumber({
				errorHandler: isProduction ? false : true
			}))
			.pipe($.sass(config.scssOpt).on('error', onError))
			.pipe(gulp.dest(config.compScss.dest))
			.pipe(browserSync.stream());
	}
	compsass.description = 'COMPANY SCSS compile후 css로 컴파일 및 소스맵 생성해서 dist로 복사'

	function logsass() {
		return gulp
			.src(config.logScss.src)
			.pipe($.if(!isProduction, $.sourcemaps.init()))
			.pipe($.plumber({
				errorHandler: isProduction ? false : true
			}))
			// .pipe($.sass(config.scssOpt).on('error', onError))
			// lucy 중단되지 않음 
			.pipe($.sass(config.scssOpt).on('error',$.sass.logError))
			// lucy 삭제
			// .pipe($.sass(config.scssOpt))
			// .on('error', function(err){
			// 	displayError(err);
			// })
			.pipe($.if(!isProduction, $.sourcemaps.write('./')))
			.pipe(gulp.dest(config.logScss.dest))
			.pipe(browserSync.stream())
			.pipe(touch());
	}
	logsass.description = 'WMP LOG SCSS compile후 css로 컴파일 및 소스맵 생성해서 dist로 복사'

	gulp.task(compsass);
	gulp.task(logsass);

};
