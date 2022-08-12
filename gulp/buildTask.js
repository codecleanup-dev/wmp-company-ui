/**
 * @param gulp
 * @param $
 * @param config
 */
module.exports = (gulp, $, config) => {

	// gulp.task('build', gulp.series('clean', 'imgSpriteBuild', 'compsass', 'logsass'));

	gulp.task('build', gulp.series('clean', gulp.series('imgSpriteBuild', 'mSvgSprite', 'compsass'), 'logsass'));

};
