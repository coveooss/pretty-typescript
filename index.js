const lazypipe = require('lazypipe');
const tslint = require('gulp-tslint');
const tsfmt = require('./gulp-typescript-formatter');

const tslintOptions = require('./tslint.json');
const tsfmtOptions = require('./tsfmt.json');

module.exports = (options) => {
  return lazypipe()
  .pipe(tsfmt, { baseDir: __dirname, tsfmt: true, tslint: true })
  .pipe(tslint, { configuration: tslintOptions, formatter: 'prose' })
  .pipe(tslint.report, Object.assign({ emitError: false }, options))();
}
