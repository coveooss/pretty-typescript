const lazypipe = require('lazypipe');
const tslint = require('gulp-tslint');
const tsfmt = require('gulp-tsfmt');

const tslintOptions = require('./tslint.json');
const tsfmtOptions = require('./tsfmt.json');

module.exports = lazypipe()
  .pipe(tslint, {configuration: tslintOptions})
  .pipe(tslint.report, 'prose', {emitError: false})
  .pipe(tsfmt, {options: tsfmtOptions});
