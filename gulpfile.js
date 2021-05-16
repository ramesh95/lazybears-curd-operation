var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var ts = require('gulp-typescript');
var merge = require('merge2');  // Requires separate installation
var tsProject = ts.createProject("tsconfig.json");

gulp.task('default', function() {
    var tsResult = tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('dist')),
        tsResult.js.pipe(gulp.dest('dist')),
        tsResult.js.pipe(sourcemaps.write('.')).pipe(gulp.dest('dist'))
    ]);
});