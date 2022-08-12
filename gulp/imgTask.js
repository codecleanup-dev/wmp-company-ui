const merge = require('merge-stream'),
			vinyl	= require('vinyl-buffer');

/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	function sassSprite() {
		const opts = {
			spritesmith: (options, sprite, icons) => {
				//options.imgPath = `../spr/${options.imgName}`;
				options.imgName = `${sprite}.png`;
				options.cssName = `_${sprite}.scss`;
				options.cssTemplate = `./gulp/helper/sprite.scss.handlebars`;
				options.padding = 5;
				options.cssVarMap = (sp) => {
					sp.name = `${sp.name}`;
				};
				return options;
			}
		};
		const spriteData =
			gulp.src(config.imgSprite.src)
				.pipe($.spritesmithMulti(opts))
				.on('error', (err) => {
					console.log(err)
				});
		const imgStream = spriteData.img
			.pipe(vinyl())
			.pipe($.imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 7
				}))
			.pipe(gulp.dest('./dist/comp/css/spr/'))

		const cssStream = spriteData.css
			.pipe(gulp.dest('./src/comp/resources/sass/vendors/img'))
			.pipe($.wait(2000))

		return merge(imgStream, cssStream);
	}
	sassSprite.description = 'COMPANY 전용 자동 이미지 스프라이트 생성 및 관련 이미지 스프라이트 관 SCSS파일을 css로 컴파일 및 소스맵 생성'

	function logsassSprite() {
		const logopts = {
			spritesmith: (options, sprite, icons) => {
				//options.imgPath = `../spr/${options.imgName}`;
				options.imgName = `${sprite}.png`;
				options.cssName = `_${sprite}.scss`;
				options.cssTemplate = `./gulp/helper/sprite.scss.handlebars`;
				options.padding = 5;
				options.cssVarMap = (sp) => {
					sp.name = `${sp.name}`;
				};
				return options;
			}
		};
		const logspriteData =
			gulp.src(config.logimgSprite.src)
				.pipe($.spritesmithMulti(logopts))
				.on('error', (err) => {
					console.log(err)
				});
		const logimgStream = logspriteData.img
			.pipe(vinyl())
			.pipe($.imagemin({
				interlaced: true,
				progressive: true,
				optimizationLevel: 7
			}))
			.pipe(gulp.dest('./dist/wmplog/css/spr/'))

		const logcssStream = logspriteData.css
			.pipe(gulp.dest('./src/wmplog/resources/sass/vendors/img'))
			.pipe($.wait(2000))

		return merge(logimgStream, logcssStream);
	}
	sassSprite.description = 'WMP LOG 전용 자동 이미지 스프라이트 생성 및 관련 이미지 스프라이트 관 SCSS파일을 css로 컴파일 및 소스맵 생성'

	gulp.task(sassSprite);
	gulp.task('imgSprite', gulp.series('imgclean', 'sassSprite', 'compsass'));
	gulp.task(logsassSprite);
	gulp.task('logimgSprite', gulp.series('imgclean', 'logsassSprite', 'logsass'));

	gulp.task('imgSpriteBuild', gulp.series('imgclean', 'sassSprite', 'logsassSprite'));

};
