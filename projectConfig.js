module.exports = {
	project: 'VI Frontend Framework 5',
	global: {
		externalResources: {
			'vi-css-helper': ['helper.css', 'print.css'],
			'@biotope/resource-loader': 'src/resourceLoader.js',
			'jquery': 'dist/jquery.js',
			'jquery-migrate': 'dist/jquery-migrate.js',
			'normalize.css': 'normalize.css',
			'@webcomponents/webcomponentsjs': ['webcomponents-loader.js', 'custom-elements-es5-adapter.js']
		}
	},

	uglify: {
		ignoreList: [
			'resources/js/vendor/custom-elements-es5-adapter.js'
		]
	}
};
