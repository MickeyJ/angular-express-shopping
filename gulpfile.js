var gulp       = require('gulp'),
    sass       = require('gulp-sass'),
    browserify = require('gulp-browserify'),
    injectHTML = require('gulp-js-html-inject'),
    ngAnnotate = require('gulp-ng-annotate'),
    uglify     = require('gulp-uglify'),
    rename     = require('gulp-rename');

gulp.task('angular.dev', function(){
  gulp.src('src/js/app.js')
    .pipe(browserify({ debug: true }))
    .pipe(injectHTML({
      basepath: 'src/js/templates'
    }))
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/'))
});

gulp.task('sass', function(){
  gulp.src('src/scss/main.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('public/'))
});

gulp.task('watch', function(){
  gulp.watch('src/js/**/*.*', ['angular.dev']);
  gulp.watch('src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['angular.dev', 'sass', 'watch']);

gulp.task('angular.build', function(){
  gulp.src('src/js/app.js')
    .pipe(browserify({ debug: false }))
    .pipe(injectHTML({
      basepath: 'src/js/templates'
    }))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(rename('bundle.js'))
    .pipe(gulp.dest('public/'))
});
