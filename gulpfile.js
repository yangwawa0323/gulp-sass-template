let gulp = require('gulp');
let uglify = require('gulp-uglify');
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass')(require('sass'));
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cleanCSS = require('gulp-clean-css');

const DIST_PATH = './public/dist';
const SCRIPT_PATH = './public/scripts/**/*.js';
const SCSS_PATH = './public/scss/**/*.scss';

// Set the browser that you want to support
const AUTOPREFIXER_BROWSERS = [
	'ie >= 10',
	'ie_mob >= 10',
	'ff >= 30',
	'chrome >= 34',
	'safari >= 7',
	'opera >= 23',
	'ios >= 7',
	'android >= 4.4',
	'bb >= 10',
];

// scripts
gulp.task('scripts', async function () {
	console.log('[scripts] task:');
});

// styles
gulp.task('styles', async function () {
	console.log('[styles] task: ');
	return gulp
		.src(SCSS_PATH)
		.pipe(sourcemaps.init())
		.pipe(
			sass({
				outputStyle: 'expanded',
			}).on('error', sass.logError)
		)
		.pipe(
			postcss([autoprefixer({ overrideBrowserslist: AUTOPREFIXER_BROWSERS })])
		)
		.pipe(sourcemaps.write(`maps`))
		.pipe(cleanCSS({ compatibility: 'ie8' }))
		.pipe(gulp.dest(DIST_PATH));
});

gulp.task('default', function () {
	console.log('[default] task: ');
});

gulp.task('watch', async function () {
	console.log('[watch] task: ');
	await gulp.watch(SCSS_PATH, gulp.series('styles'));
});

// function buildStyles() {
// 	return gulp
// 		.src('./public/scss/**/*.scss')
// 		.pipe(sourcemaps.init())
// 		.pipe(sass().on('error', sass.logError))
// 		.pipe(sourcemaps.write('./maps'))
// 		.pipe(gulp.dest('./public/css'));
// }

// exports.buildStyles = buildStyles;
