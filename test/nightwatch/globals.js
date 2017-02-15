var argv = require('yargs').argv;

 module.exports = {
	 visualRegression: {
		 // Just a placeholder - doesn't actually work yet
		 enabled:         true,

		 // Baseline screenshots stored here
		 baselineFolder:  'test/nightwatch/screenshots/baseline',

		 // Screenshots for the current run stored here
		 currentFolder:   'test/nightwatch/screenshots/new',

		 // Screenshots failing comparison stored here
		 errorFolder:     'test/nightwatch/screenshots/failures',

		 // If no selector is provided, default to this one
		 defaultSelector: 'body',

		 // Automatically hide any elements matching these selectors
		 // Currently requires a call to `hide`
		 censorSelectors: [
			 '.footer', '.header'
		 ],

		 // Fail the regression assertion if the images are more than
		 // this percent different
		 mismatchTolerance: 0.3
	 },
	beforeEach: function(browser, done) {
		if (JSON.parse(argv._[0]).url ) {
			browser.launch_url = JSON.parse(argv._[0]).url + '/dist/';
		}
		done();
	}
};
