'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cssBase64 = require('gulp-css-base64');
const path = require('path');
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const imagemin = require('gulp-imagemin');
const del = require('del');
const cache = require('gulp-cache');
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const runSequence = require('run-sequence');
const htmlmin = require('gulp-htmlmin');
const merge = require('merge-stream');

gulp.task('sass', function () {
    return gulp.src('./src/scss/styles.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: false,
            paths: [ path.join(__dirname, 'scss', 'includes') ]
        })
            .on("error", notify.onError(function(error) {
                return "Failed to Compile SCSS: " + error.message;
            })))
        .pipe(cssBase64())
        .pipe(autoprefixer())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./src/css/'))
        .pipe(gulp.dest('./dist/css/'))
        .pipe(browserSync.reload({
            stream: true
        }))
        .pipe(notify("SCSS Compiled Successfully :)"));
});

gulp.task('jsmin', function() {
    return gulp.src(['./src/js/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('htmlmin', function() {

    var indexOutput = gulp.src('./src/index.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/'));

    var partialsOutput = gulp.src('./src/partials/*.html')
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('./dist/partials/'));

    return merge(indexOutput, partialsOutput);

});

gulp.task('imagemin', function (){
    return gulp.src('./src/img/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(cache(imagemin({
            interlaced: true
        })))
        .pipe(gulp.dest('./dist/img'));
});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: './src/'
        }
    })
});

gulp.task('yarn', function() {

    var graphOutput = gulp.src('./src/js/vendor/**/*')
        .pipe(gulp.dest('./dist/js/vendor'));

    return merge(graphOutput);

});

gulp.task('watch', ['browserSync'], function () {
    gulp.watch('./src/scss/**/*', ['sass']);
    gulp.watch('./src/**/*.js').on('change', browserSync.reload);
    gulp.watch('./src/**/*.html').on('change', browserSync.reload);
});

gulp.task('clean', function() {
    del('dist');
});

gulp.task('default', ['sass', 'watch']);

gulp.task('build', function() {
    runSequence('clean', 'sass', 'imagemin', 'htmlmin', 'jsmin', 'yarn');
});