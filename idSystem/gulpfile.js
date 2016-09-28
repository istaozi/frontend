//  gulp desc http://www.cnblogs.com/2050/p/4198792.html

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    minifycss = require('gulp-minify-css'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    del = require('del'),
    less = require('gulp-less');

gulp.task('jshint', function () {
    return gulp.src([
        '!./res/js/common/jquery*.js',
        '!./res/js/common/juicer*.js',
        '!./res/js/common/json2*.js',
        '!./res/js/common/base*.js',
        '!./res/js/common/regiondata*.js',
        '!./res/js/common/require*.js',
        './res/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./pages/build/'));
});

gulp.task('csshint', function () {
    return gulp.src([
        './res/**/*.css'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(gulp.dest('./pages/build/'));
});

gulp.task('imghint', function () {
    return gulp.src([
        './res/**/*.png'])
        .pipe(gulp.dest('./pages/build/'));
});


gulp.task('minifycss', function() {
    return gulp.src(['./res/**/*.css'])      //压缩的文件
        .pipe(minifycss())   //执行压缩
        .pipe(gulp.dest('./pages/build/'));   //输出文件夹
});

gulp.task('lesstocss',function (){
    return gulp.src(['./res/**/*.less'])
        .pipe(less())
        .pipe(gulp.dest('pages/build'));
});

gulp.task('minlesstocss',function (){
    return gulp.src(['./res/**/*.less'])
        .pipe(less())
        .pipe(minifycss())
        .pipe(gulp.dest('pages/build'));
});


gulp.task('minifyjs', function() {
   return gulp.src(['./res/**/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('./pages/build/'));
});

gulp.task("watch",function (){
    gulp.watch("./res/**/*.js",["jshint"]);
    gulp.watch(["./res/**/*.css","./res/**/*.less","./res/**/*.png"],["csshint",'lesstocss','imghint']);
});

gulp.task('clean', function(cb) {
    return del(['./pages/build/'], cb)
});

gulp.task('default', ['clean'], function() {
    gulp.start('clean','minifycss','minlesstocss', 'minifyjs','imghint');
});