module.exports = () => {
	$.gulp.task('mozjpeg', () => {
		return $.gulp.src(['src/static/img/**/*.{jpg, jpeg}', '!src/static/img/responsive/**/*.*'])
			.pipe($.imagemin([
				$.mozjpeg({quality: 85, progressive: true}),
			]))
			.pipe($.gulp.dest('./build/static/img/'))
	});

};