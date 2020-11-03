module.exports = () => {
	$.gulp.task('responsive-jpg', () => {
		return $.gulp.src('src/static/img/responsive/**/*.jpg')
			.pipe($.imagemin([
				$.mozjpeg({quality: 85, progressive: true}),
				]))
			.pipe($.responsive([
				{
					width: 400,
					suffix: '-400'
				},
				{
					width: 600,
					suffix: '-600'
				},
				{
					width: 800,
					suffix: '-800'
				},
				{
					width: 1200,
					suffix: '-1200'
				},
				{
					width: 1600,
					suffix: '-1600'
				},
				{
					width: 1800,
					suffix: '-1800'
				},
				{
					width: 2400,
					suffix: '-2400'
				},
				{
					width: 3600,
					suffix: '-3600'
				},
				{
					width: 5400,
					suffix: '-5400'
				}
			]))
			.pipe($.gulp.dest('./build/static/img/'))	
			.pipe($.imageminWebp())
			.pipe($.gulp.dest('./build/static/img/'))	
	});

};

