module.exports = {
	'Visual Test - Stage Component': function(browser) {
		browser
			.windowMaximize()
			.url('http://www.google.de')
			.waitForElementPresent('body', 3000)
			.assert.title("Google")
			.pause(5000)
			.end();
	}
};
