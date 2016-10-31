
var gulp = require('gulp');
uglify = require('gulp-uglify');
jshint = require('gulp-jshint');
concat = require('gulp-concat');

gulp.task('greet', function () {
    console.log('Здравствуй, мир!');
});

gulp.task('build', function () {
    return gulp.src(['./src/main/js/module.js','./src/main/js/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(uglify())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./src/main/resources/static/js'));
});

gulp.task('copy-html', function() {
    gulp.src('./src/main/js/**/*.html')
        .pipe(gulp.dest('./src/main/resources/static/templates'));
});