module.exports = {
  project: 'Biotope - The Frontend Ecosystem Framework',
  global: {
    tasks: {
      htmlhint: false,
    },
    externalResources: {
      'vi-css-helper': ['helper.css', 'print.css'],
      'sanitize.css': 'sanitize.css',
      'handlebars': 'dist/handlebars.runtime.js',
    },
    tsEntryPoints: [
      'resources/ts/**/*.ts',
      'components/**/*.ts',
    ],
  },
  webpack: {
    watchScss: true,
  },
};
