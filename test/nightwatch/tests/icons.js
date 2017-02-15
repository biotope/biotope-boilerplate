module.exports = {
	'Visual Test - Stage Component': function(browser) {
		browser
			.windowMaximize()
			.url(browser.launch_url + '/90demo.01icons.html')
			.waitForElementPresent('body', 3000)
			.assert.title('VIGulpFrontendBoilerplate')
			.end();
	}
};
