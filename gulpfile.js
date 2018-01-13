var gulp = require('gulp');
var watch = require('gulp-watch');
var ts = require('gulp-typescript');

gulp.task('js', function () {
    return watch('app/src/*.js', { ignoreInitial: false })
        .pipe(gulp.dest('app/dist'));
});

gulp.task('ts', function () {
    return watch('app/src/*.ts', function () {
        gulp.src('app/src/*.ts')
            .pipe(ts({
                module: 'commonjs'
            }))
            .pipe(gulp.dest('app/dist'));
    });
});

gulp.task('markup', function () {
    return watch('app/src/*.html', { ignoreInitial: false })
        .pipe(gulp.dest('app/dist'));
});

gulp.task('default', ['js', 'ts','markup']);