module.exports = () => {
	$.gulp.task('watch', () => {
		$.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('src/static/sass/**/*.{scss,sass}', $.gulp.series('styles'))
		$.gulp.watch('src/static/img/svg/**/*.svg', $.gulp.series('svg'))
		$.gulp.watch('src/static/img/svg/true/**/*.svg', $.gulp.series('true-svg'))
		$.gulp.watch(['src/static/img/**/*.jpg', '!src/static/img/responsive/**/*.*', '!src/static/img/svg/**/*.*'], $.gulp.series('mozjpeg'))
		$.gulp.watch(['src/static/img/**/*.png', '!src/static/img/responsive/**/*.*', '!src/static/img/svg/**/*.*'], $.gulp.series('pngquant'))
		$.gulp.watch('src/static/img/responsive/**/*.{jpg,jpeg}', $.gulp.series('responsive-jpg'))
		$.gulp.watch('src/static/img/responsive/**/*.png', $.gulp.series('responsive-png'))
		$.gulp.watch(['src/static/img/**/*.!(svg)*', '!src/static/img/responsive/**/*.*'], $.gulp.series('webp'))
		$.gulp.watch('src/static/js/**/*.js', $.gulp.series('terser'))
	});
};