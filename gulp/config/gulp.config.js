const isProduction = require('./gulp.env');
const config = {

	compHtml: {
		src: 'src/comp/views/**/*.html',
		dest: 'dist/comp/html'
	},

	compScss: {
		src: 'src/comp/resources/sass/**/*.s+(a|c)ss',
		dest: 'dist/comp/css'
	},

	compImgs: {
		src: 'src/comp/resources/images/*/*',
		dest: 'dist/comp/images'
	},

	compFonts: {
		src: 'src/comp/resources/fonts/*',
		dest: 'dist/comp/fonts'
	},

	compJs: {
		src: 'src/comp/resources/js/*',
		dest: 'dist/comp/js'
	},

	imgSprite : {
		src: 'src/comp/resources/img-sprite/**/*.png',
		clean	: [
					'dist/comp/css/spr/*.png',
					'src/comp/resources/sass/vendors/img/**/*'
				]
	},

	compreview: {
		src: 'src/comp/resources/js/*.js',
		dest: 'src/comp/resources/js/',
	},

	compSvgReviewPath: {
		src: 'src/comp/svg-guide/*.html',
		dest: 'src/comp/svg-guide/',
	},

	// WMP LOG

	logHtml: {
		src: 'src/wmplog/views/**/*.html',
		dest: 'dist/wmplog/html'
	},

	logScss: {
		src: 'src/wmplog/resources/sass/**/*.s+(a|c)ss',
		dest: 'dist/wmplog/css'
	},

	logImgs: {
		src: 'src/wmplog/resources/images/*/*',
		dest: 'dist/wmplog/images'
	},

	logFonts: {
		src: 'src/wmplog/resources/fonts/*',
		dest: 'dist/wmplog/fonts'
	},

	logJs: {
		src: 'src/wmplog/resources/js/*',
		dest: 'dist/wmplog/js'
	},

	logimgSprite: {
		src: 'src/wmplog/resources/img-sprite/**/*.png',
		clean: [
			'dist/wmplog/css/spr/*.png',
			'src/wmplog/resources/sass/vendors/img/**/*'
		]
	},

	mSvg: {
		src: [
			'src/wmplog/resources/images/svg/**/*.svg',
			'!src/wmplog/resources/images/svg/etc/*.svg'
		],
		clean: [
			'dist/wmplog/css/svg/*.svg',
			'src/wmplog/resources/sass/vendors/svg/*.scss'
		]
	},

	mSvgetc: {
		src: 'src/wmplog/resources/images/svg/etc/*.svg',
		dest: 'dist/wmplog/css/svg/',
		clean: [
			'src/wmplog/resources/sass/vendors/svg/_etc.scss',
			'dist/wmplog/css/svg/etc.svg'
		]
	},

	logpreview: {
		src: 'src/wmplog/resources/js/*.js',
		dest: 'src/wmplog/resources/js/',
	},

	logSvgReviewPath: {
		src: 'src/wmplog/svg-guide/*.html',
		dest: 'src/wmplog/svg-guide/',
	},

	browsers: [
		'last 3 versions',
		'Android >= 4',
		'Chrome >= 20',
		'Firefox >= 15',
		'Explorer >= 8',
		'iOS >= 6',
		'Opera >= 12',
		'Safari >= 6'
	],

	scssOpt: {
		errLogToConsole: true,
		outputStyle: isProduction ? 'compressed' : 'expanded', // nested, expanded, compact, compressed
		indentType: 'space',
		indentWidth: 2, // maximum:10
		precision: 6,
		linefeed: 'lf' // cr , crlf, lf , lfcr
	},

	purifyOpt: {
		info: true,
		minify: isProduction ? true : false,
		rejected: true
	}
};

module.exports = config;
