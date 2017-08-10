let gulp = require('gulp'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    // sync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function() {
  return gulp.src('scss/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(plumber())
  // .pipe(sync())
  .pipe(sass({
    outputStyle: 'expanded',
    sourceComments: 'map',
    errLogToConsole: true}))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('css'))
});

gulp.task('watch', function() {
  gulp.watch('scss/**/*.scss', ['sass'])
})
