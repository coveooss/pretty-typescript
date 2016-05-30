const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const File = require('vinyl');
const prettyTypescript = require('../');

describe('PrettyTypeScript', function () {
  var formatter = null;

  beforeEach(function () {
    formatter = prettyTypescript();
  });
  afterEach(function () {
    formatter = null;
  });

  it('should autoformat TypeScript file', function (done) {
    var fakeFile = new File({
      contents: new Buffer('let anything:         number =   {nopadding};'),
      path: 'test.ts'
    });

    formatter.write(fakeFile);
    formatter.once('data', function (file) {
      expect(file.isBuffer()).to.be.true;
      expect(file.contents.toString()).to.equal('let anything: number = { nopadding };\n');
      done();
    });
  });

  it('should throw linting errors', function (file) {
    var fakeFile = new File({
      contents: new Buffer('class notCAMELcase {}'),
      path: 'test.ts'
    });

    var logSpy = sinon.spy(console, 'log');

    formatter = prettyTypescript();
    formatter.write(fakeFile);
    formatter.on('data', function (file) {
      expect(logSpy.callCount).to.equal(1);
      expect(logSpy.firstCall.args[2]).to.match(/name must be in pascal case/);
      done();
    });
  });
});