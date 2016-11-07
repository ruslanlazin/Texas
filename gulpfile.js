var gulp = require('gulp');
uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var flatten = require('gulp-flatten');

gulp.task('default', [ 'copy-html' , 'build']);

gulp.task('build', function () {
    return gulp.src(['./src/main/js/module.js', './src/main/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        // .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/main/resources/static/js'));
});

gulp.task('copy-lib', function () {
    gulp.src(['./node_modules/angular-route/angular-route.min.js',
        './node_modules/angular/angular.min.js'])
        .pipe(gulp.dest('./src/main/resources/static/js'));
});

gulp.task('copy-html', function () {
    gulp.src('./src/main/js/**/*.html')
        .pipe(flatten({includeParents: 0}))
        .pipe(gulp.dest('./src/main/resources/static/templates'));
});