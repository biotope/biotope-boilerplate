/* eslint-disable */
var config = require('../../node_modules/@biotope/build/config.js');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

// use chai filesystem helper
chai.use(require('chai-fs'));

var test = {
  'directoryExists': function (dir) {

    it(dir + ' exists', function () {
      expect(dir).to.be.a.directory();
    });
  },

  'fileExistsAndNotEmpty': function (file) {

    it(file + ' exists and is not empty', function () {
      expect(file).to.be.a.file().and.not.empty;
    });
  },

  'fileContentEquals': function (file, fixture) {

    it(file + ' content equals fixture', function () {
      expect(file).to.have.content(fs.readFileSync(fixture, 'utf8'));
    });

    it(file + ' exists and is not empty', function () {

      expect(file).to.be.a.file().and.not.empty;
    });
  }
};


describe('Expect that', function () {

  describe('path', function () {

    test.directoryExists(config.global.dev);
    test.directoryExists(config.global.dist);
    test.directoryExists('.iconfont');

  });

  describe('file', function () {

    // check absence
    it('_useref.html not exists', function () {
      expect(config.global.dist + '/_useref.html').to.not.be.a.path();
    });

    // check existence
    test.fileExistsAndNotEmpty(config.global.dist + '/index.html');
    test.fileExistsAndNotEmpty(config.global.dist + '/01layout.01grid.html');

  });

  describe('fonts', function () {

    test.fileExistsAndNotEmpty(config.global.dist + '/resources/fonts/icons/Icons.ttf');
    test.fileExistsAndNotEmpty(config.global.dist + '/resources/fonts/icons/Icons.woff');

  });

  describe('js', function () {

    // check existence
    test.fileExistsAndNotEmpty(config.global.dist + '/resources/js/scripts.all.min.js');
    test.fileExistsAndNotEmpty(config.global.dist + '/resources/js/scripts.head.all.min.js');
    test.fileExistsAndNotEmpty(config.global.dist + '/resources/js/vendor/modernizr.js');
    test.fileExistsAndNotEmpty(config.global.dist + '/resources/ts/handlebars.helper.js');

  });

  describe('css', function () {

    // check existence
    test.fileExistsAndNotEmpty(config.global.dist + '/resources/css/styles.all.min.css');
    test.fileExistsAndNotEmpty(config.global.dist + '/resources/css/styles.print.min.css');

  });

});
