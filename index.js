const lazypipe = require('lazypipe');
const tslint = require('gulp-tslint');
const tsfmt = require('./gulp-typescript-formatter');
const fs = require("fs");
const process = require("process");
const path = require("path");

const cwd = process.cwd();

const pathToTsfmtInWorkingDirectory = path.join(cwd, "tsfmt.json");
const hasTsfmtInWorkingDirectory = fs.existsSync(pathToTsfmtInWorkingDirectory);

const pathToTslintInWorkingDirectory = path.join(cwd, "tslint.json");
const hasTslintInWorkingDirectory = fs.existsSync(pathToTslintInWorkingDirectory);

if (hasTsfmtInWorkingDirectory !== hasTslintInWorkingDirectory) {
  throw "You must have both a 'tslint.json' and a 'tsfmt.json' file when using the working directory configuration.";
}

const tsfmtPath = hasTsfmtInWorkingDirectory ? cwd : __dirname;
const tslintOptions = hasTslintInWorkingDirectory ? require(pathToTslintInWorkingDirectory) : require("./tslint.json")

module.exports = (options) => {
  return lazypipe()
  .pipe(tsfmt, { baseDir: tsfmtPath, tsfmt: true, tslint: true })
  .pipe(tslint, { configuration: tslintOptions, formatter: 'prose' })
  .pipe(tslint.report, Object.assign({ emitError: false }, options))();
}
