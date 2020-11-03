module.exports = () => {
	$.gulp.task('pngquant', () => {
		return $.gulp.src(['src/static/img/**/*.png', '!src/static/img/responsive/**/*.*'])
			.pipe($.imagemin([
				$.pngquant({quality: [0.85, 0.9]}),
			]))
			.pipe($.gulp.dest('./build/static/img/'))
	});

};

