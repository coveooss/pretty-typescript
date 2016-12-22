const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const File = require('vinyl');
const prettyTypescript = require('../');

describe('PrettyTypeScript', () => {
  var formatter = null;

  beforeEach(() => {
    formatter = prettyTypescript();
  });
  afterEach(() => {
    formatter = null;
  });

  it('should autoformat TypeScript file', done => {
    var fakeFile = new File({
      contents: new Buffer('let anything:         number =   {nopadding};'),
      path: 'test.ts'
    });

    formatter.write(fakeFile);
    formatter.once('data', file => {
      expect(file.isBuffer()).to.be.true;
      expect(file.contents.toString()).to.equal('let anything: number={ nopadding };');
      done();
    });
  });

  it('should throw linting errors', done => {
    var fakeFile = new File({
      contents: new Buffer('class notCAMELcase {}'),
      path: 'test.ts'
    });

    var logSpy = sinon.spy(console, 'log');

    formatter.write(fakeFile);
    formatter.on('data', file => {
      expect(logSpy.callCount).to.equal(1);
      expect(logSpy.firstCall.args.join()).to.match(/name must be in pascal case/);
      done();
    });
  });
});
