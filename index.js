const lazypipe = require('lazypipe');
const tslint = require('gulp-tslint');
const tsfmt = require('./gulp-typescript-formatter');
const fs = require("fs");
const process = require("process");
const path = require("path");

const currentWorkingDirectory = process.cwd();

const tslintOptions = loadRequiredOptions('tslint.json');
const tsfmtOptions = loadRequiredOptions('tsfmt.json');

module.exports = (options) => {
  return lazypipe()
  .pipe(tsfmt, Object.assign({ baseDir: __dirname }, tsfmtOptions))
  .pipe(tslint, { configuration: tslintOptions, formatter: 'prose' })
  .pipe(tslint.report, Object.assign({ emitError: false }, options))();
}

function loadRequiredOptions(fileName) {
  let fileInWorkingDirectory = path.join(currentWorkingDirectory, fileName);
  if (fs.existsSync(fileInWorkingDirectory)) {
    return require(fileInWorkingDirectory);
  } else {
    return require(`./${fileName}`)
  }
}