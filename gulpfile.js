const gulp = require('gulp');
const prettyTypescript = require('./index.js');
const path = require('path');

gulp.task('default', function () {
  gulp.src('examples/**/*.ts')
    .pipe(prettyTypescript())
    .pipe(gulp.dest('formatted-examples'));
});
