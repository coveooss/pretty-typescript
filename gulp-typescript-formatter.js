"use strict";

var PluginError = require('gulp-util').PluginError;
var through = require('through2');
var formatter = require('typescript-formatter');

function gulpTypescriptFormatter(options) {
  var formatOptions = options.configPath ? require(options.configPath) : {};

  return through.obj(function(file, enc, cb) {
    if (file.isNull()) {
      // return empty file
      return cb(null, file);
    }

    if (file.isBuffer()) {
      var fileContentPromise = formatter.processString(file.path, String(file.contents), formatOptions);

      fileContentPromise.then(function(result) {
        file.contents = new Buffer(result.dest);

        cb(null, file);
      });
    }

    if (file.isStream()) {
      return cb(new PluginError('gulp-typescript-formatter', 'Streaming not supported'));
    }
  });

}

module.exports = gulpTypescriptFormatter;
