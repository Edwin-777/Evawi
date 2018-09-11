
var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task('pug2html', function() {
  gulp.src('src/views/*.pug')
  .pipe(pug({
  	pretty : true
  }))
  .on('error', console.log.bind(console))
  .on('error', notify.onError("Error: <%= error.message %>"))
  .pipe(gulp.dest('dist/'))
});

gulp.task('sass2css',function(){
	gulp.src('src/sass/main.sass')
	.pipe(sass())
	.on('error', sass.logError)
	.on('error', notify.onError("Error: <%= error.message %>"))
	.pipe(autoprefixer({browsers: ['cover 99.5%','ie > 9'], cascade: false}))
	.pipe(gulp.dest('dist/css/'));
})

gulp.task('listening',function(){
	gulp.watch('src/views/**/*.pug',['pug2html']);
	gulp.watch('src/sass/**/*.sass',['sass2css']);
})

gulp.task('default',['listening']);