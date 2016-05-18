const lazypipe = require('lazypipe');
const tslint = require('gulp-tslint');
const gutil = require('gulp-util');
const tsfmt = require('./gulp-typescript-formatter');
const flatten = require('gulp-flatten');
const path = require('path');

const tslintOptions = require('./tslint.json');
const tsfmtOptions = require('./tsfmt.json');

module.exports = lazypipe()
  .pipe(tsfmt, {baseDir: __dirname, tsfmt: true, tslint: true})
  .pipe(tslint, {configuration: tslintOptions})
  .pipe(tslint.report, 'prose', {emitError: false});
