const log						= require('fancy-log'),
			colors				= require('ansi-colors'),
			glob					= require('glob'),
			path					= require('path'),
			del						= require('del'),
			isProduction	= require('./config/gulp.env'),
			browserSync		= require('browser-sync').create(),
			reload				= browserSync.reload;
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

	const now = Number(new Date());

	function mBuildsvg() {
		function svgOpt(dirPath) {
			return {
				shape: {
					spacing: {
						padding:2,
						box: 'content'
					},
					transform :[
						shapeTransform,
						'svgo',
					]
				},
				mode: {
					css: {
						bust: false,
						dest: '.',
						prefix: '%s',
						sprite: 'dist/wmplog/css/svg/' + path.basename(dirPath) + '.svg',
						render: {
							scss: {
								template: './gulp/helper/svgsprite-scss-tmpl.mustache',
								dest: 'src/wmplog/resources/sass/vendors/svg/_' + path.basename(dirPath) + '.scss',
							}
						},
						example: {
							template: './gulp/helper/svg-guide-tmpl.html',
							dest: 'src/wmplog/svg-guide/' + path.basename(dirPath) + '.html'
						}
					}
				},
				svg:{
					namespaceClassnames:false,
					transform       : [
						/**
						 * Custom sprite SVG transformation
						 *
						 * @param {String} svg					Sprite SVG
						 * @return {String}						Processed SVG
						 */
						function(svg) {
							if(svg.match('keyframes')) {
								svg=svg.replace(/<script>/, '<style>').replace(/<\/script>/, '<\/style>');
							}
							return svg;
						},
					]
				},
				//scss에서 사용하는 코드
				variables: {
					svgcode: function() {
						return function(svg,render) {
							svg=render(svg).replace(/<svg[^>]*>|<\/svg>/gi,'').replace(/%/g,'%25').replace(/#/g,'%23');
							if(svg.match('keyframes')){
								svg=svg.replace(/<script>/, '<style>').replace(/<\/script>/, '<\/style>');
							}
							return svg;
						}
					},
					time: now
				}
			}
		}

		return glob('src/wmplog/resources/images/svg/**/', function(err, dirs) {
			dirs.forEach(function(dir) {
				gulp.src(path.join(dir, '*.svg'))
					.pipe($.plumber({
						errorHandler: isProduction ? false : true
					}))
					.pipe($.svgmin())
					.pipe($.svgSprite(svgOpt(dir)))
					.pipe(gulp.dest('.'))
					.pipe(browserSync.stream());
			})
		});

	}
	mBuildsvg.description = 'Mobile SVG file 들로 자동 SVG SPRITE 파일과 SCSS파일을 생성후 컴파일합니다.'
	function shapeTransform(shape, spriter, callback) {
		svg=shape.getSVG();
		if(svg.match('keyframes')){
			svg=svg.replace(/<style[^>]*>/, '<script>').replace(/<\/style>/, '<\/script>');
			shape.setSVG(svg);
		}
		callback(null);
	}
	function mSvgEtc() {
		return gulp
			.src(config.mSvgetc.src)
			.pipe($.svgmin())
			.pipe(gulp.dest(config.mSvgetc.dest))
			.pipe($.wait(2000));
	}
	mSvgEtc.description = '용량이 좀 크거나 예외케이스 또는 sprite에 추가하지 않고 단독으로 쓰이는 svg들을 Dist 폴더로 복사합니다.'

	function mSvgclean() {
		return del(config.mSvg.clean)
	}
	mSvgclean.description = 'Mobile svg sprite 이미지파일과 관련SCSS 파일을 제거합니다.'

	function mSvgGuideClean() {
		return del('./src/m/svg-guide')
	}
	mSvgGuideClean.description = 'Mobile svg sprite guide관련 폴더와 파일을 제거합니다.'

	gulp.task(mSvgclean);
	gulp.task(mSvgGuideClean);
	gulp.task(mBuildsvg);
	gulp.task(mSvgEtc);
	gulp.task('mSvgSprite', gulp.series('mSvgclean', 'mSvgGuideClean', 'mBuildsvg', 'mSvgEtc'),'logsass');
	// gulp.task('mSvgSprite', gulp.series('logsass'));
};
