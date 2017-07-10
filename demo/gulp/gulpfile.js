let gulp = require('gulp'),
    less = require('gulp-less');

gulp.task('testLess', () =>{
    gulp.src('css/index.less') // entry
        .pipe(less())
        .pipe(gulp.dest('css/src')); // output
});

gulp.task('default',['testLess'])