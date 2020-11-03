module.exports = () => {
	$.gulp.task('true-svg', () => {
		return $.gulp.src('./src/static/img/svg/true/**.svg')
			.pipe($.svgmin({
				js2svg: {
					pretty:true
				}
			}))
			.pipe($.gulpReplace('&gt;', '>'))
			.pipe($.svgSprite({
				mode: {
					symbol: {
						sprite: '../sprite-true.svg',
						render: {
							sass: {
								dest: '../../../../../src/static/sass/utils/_sprite.sass',
								template: 'src/static/sass/utils/_sprite_template.sass'
							}
						}
					}
				}
			}))
			.pipe($.gulp.dest('./build/static/img/svg/'))
	});
};