global.$ = {
	gulp: require('gulp'),
	pug: require('gulp-pug'),
	sass: require('gulp-sass'),
	csso: require('gulp-csso'),
	browserSync: require('browser-sync').create(),
	cheerio: require('gulp-cheerio'),
	gulpReplace: require('gulp-replace'),
	svgSprite: require('gulp-svg-sprite'),
	svgmin: require('gulp-svgmin'),
	imagemin: require('gulp-imagemin'),
	imageminWebp: require('gulp-webp'),
	mozjpeg: require('imagemin-mozjpeg'),
	pngquant: require('imagemin-pngquant'),
	terser: require('gulp-terser'),
	responsive: require('gulp-rezzy'),

	path: {
		tasks: require('./gulp/config/tasks.js')
	}
};


$.path.tasks.forEach(function (tasksPath) {
	require(tasksPath)();
});

$.gulp.task('default', $.gulp.series(
	$.gulp.parallel('pug', 'styles'),
	$.gulp.parallel('watch', 'serv'),
	$.gulp.parallel('svg', 'terser'),
	$.gulp.parallel('mozjpeg', 'pngquant'),
	$.gulp.parallel('responsive-jpg', 'responsive-png'),
	'true-svg'
	));