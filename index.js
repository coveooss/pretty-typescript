const lazypipe = require('lazypipe');
const tslint = require('gulp-tslint');
// const tsfmt = require('gulp-tsfmt');
const tsfmt = require('./gulp-typescript-formatter');

const tslintOptions = require('./tslint.json');
const tsfmtOptions = require('./tsfmt.json');

module.exports = lazypipe()
  .pipe(tslint, {configuration: tslintOptions})
  .pipe(tslint.report, 'prose', {emitError: false})
  .pipe(tsfmt, tsfmtOptions);
