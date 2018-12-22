module.exports = {
	project: 'VI Frontend Framework 5',
	global: {
		externalResources: {
			'vi-css-helper': ['helper.css', 'print.css'],
			'sanitize.css': 'sanitize.css',
			'handlebars': 'dist/handlebars.runtime.js',
			'@webcomponents/webcomponentsjs': [
				'custom-elements-es5-adapter.js',
				'webcomponents-bundle.js'
			]
		},
		tsEntryPoints: [
			'resources/ts/**/*.ts',
			'components/**/*.ts'
		]
	}
};
