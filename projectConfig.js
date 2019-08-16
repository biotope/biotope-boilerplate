module.exports = {
	project: 'Biotope - The Frontend Ecosystem Framework',
	global: {
		tasks: {
		},
		externalResources: {
			'sanitize.css': 'sanitize.css',
			'@virtualidentity/css-helper': ['base.css'],
			'handlebars': 'dist/handlebars.runtime.js'
		},
		tsEntryPoints: [
			'resources/ts/**/*.ts',
			'components/**/*.ts'
		]
	},
	webpack: {
		watchScss: true
	},
	connect: {
		port: 9000
	}
};
