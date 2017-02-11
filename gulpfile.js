//Variáveis
var gulp    = require("gulp");
var del     = require("del");
var sass    = require("gulp-sass");
var htmlmin = require("gulp-htmlmin");

//Compilar e minificar o SCSS
gulp.task('com-min-sass',function(){
	return gulp.src('./source/scss/*.scss')
		   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		   .pipe(gulp.dest('./dist/scss'));
});

//Minificar o HTML
gulp.task('html-min', function(){
	return gulp.src('./source/*.html')
	       .pipe(htmlmin({collapseWhitespace: true}))
           .pipe(gulp.dest('./dist'));
});

//Watch
gulp.task('background', function(){
	gulp.watch('./source/scss/*.scss', ['com-min-sass']);
	gulp.watch('./source/*.html', ['html-min']);
});