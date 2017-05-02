var gulp = require('gulp'),
    sass = require('gulp-sass'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('css', function () {
    gulp.src('./src/styles/index.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'ie > 8']
        }))
        .pipe(rename('v-antd.css'))
        .pipe(gulp.dest('./test/dist'))
})

gulp.task('font', function () {
    gulp.src('./src/styles/common/iconfont/*.*')
        .pipe(gulp.dest('./test/dist/iconfont'))
})

gulp.task('watch', function () {
    gulp.watch(['./src/styles/*.*', './src/styles/**/*.*'], ['css'])
})

gulp.task('default', ['font', 'css', 'watch'])