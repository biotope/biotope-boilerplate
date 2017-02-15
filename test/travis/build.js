var config = require('../../gulp/config.js');
var chai = require('chai');
var expect = chai.expect;
var fs = require('fs');

// use chai filesystem helper
chai.use(require('chai-fs'));

var test = {
	'directoryExists': function(dir) {

		it(dir+' exists', function () {
			expect(dir).to.be.a.directory();
		});
	},

	'fileExistsAndNotEmpty': function(file) {

		it(file+' exists and is not empty', function () {
			expect(file).to.be.a.file().and.not.empty;
		});
	},

	'fileContentEquals': function(file, fixture) {

		it(file+' content equals fixture', function () {
			expect(file).to.have.content( fs.readFileSync(fixture, 'utf8') );
		});

		it(file+' exists and is not empty', function () {

			expect(file).to.be.a.file().and.not.empty;
		});
	}
};


describe('Expect that', function() {

	describe('path', function() {

		test.directoryExists(config.global.dev);
		test.directoryExists(config.global.dist);
		test.directoryExists('.iconfont');

	});

	describe('file', function() {

		// check absence
		it('_useref.html not exists', function () {
			expect(config.global.dist+'/_useref.html').to.not.be.a.path();
		});

		// check existence
		test.fileExistsAndNotEmpty(config.global.dist+'/index.html');
		test.fileExistsAndNotEmpty(config.global.dist+'/01layout.01default.html');
		test.fileExistsAndNotEmpty(config.global.dist+'/90demo.01icons.html');
		test.fileExistsAndNotEmpty(config.global.dist+'/90demo.02handlebars.html');

		// check content
		// test.fileContentEquals(config.global.dist+'/index.html', './test/travis/fixtures/html/index.html');
		// test.fileContentEquals(config.global.dist+'/01layout.01default.html', './test/travis/fixtures/html/01layout.01default.html');
		// test.fileContentEquals(config.global.dist+'/90demo.01icons.html', './test/travis/fixtures/html/90demo.01icons.html');
		// test.fileContentEquals(config.global.dist+'/90demo.02handlebars.html', './test/travis/fixtures/html/90demo.02handlebars.html');

	});

	describe('fonts', function() {

		test.fileExistsAndNotEmpty(config.global.dist+'/resources/fonts/icons/Icons.eot');
		test.fileExistsAndNotEmpty(config.global.dist+'/resources/fonts/icons/Icons.ttf');
		test.fileExistsAndNotEmpty(config.global.dist+'/resources/fonts/icons/Icons.woff');

	});

	describe('js', function() {

		// check existence
		test.fileExistsAndNotEmpty(config.global.dist+'/resources/js/scripts.all.min.js');
		test.fileExistsAndNotEmpty(config.global.dist+'/resources/js/scripts.head.all.min.js');

		// check contents
		test.fileContentEquals(config.global.dist+'/resources/js/scripts.all.min.js', './test/travis/fixtures/js/scripts.all.min.js');
		test.fileContentEquals(config.global.dist+'/resources/js/scripts.head.all.min.js', './test/travis/fixtures/js/scripts.head.all.min.js');

	});

	describe('css', function() {

		// check existence
		test.fileExistsAndNotEmpty(config.global.dist+'/resources/css/styles.all.min.css');
		test.fileExistsAndNotEmpty(config.global.dist+'/resources/css/styles.print.min.css');

		// check contents
		test.fileContentEquals(config.global.dist+'/resources/css/styles.all.min.css', './test/travis/fixtures/css/styles.all.min.css');
		test.fileContentEquals(config.global.dist+'/resources/css/styles.print.min.css', './test/travis/fixtures/css/styles.print.min.css');

	});

});
