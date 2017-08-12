let gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    sync = require('browser-sync').create(),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('browser-sync', ['sass'], function() {
  sync.init({
    server: {
      baseDir: "./"
    }
  });
});

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(plumber())
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: 'map',
    errLogToConsole: true}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
  .pipe(sync.reload({stream: true}))
});

gulp.task('watch', ['browser-sync'], function() {
  gulp.watch('scss/**/*.scss', ['sass']);
  gulp.watch("*.html").on('change', sync.reload);
});
