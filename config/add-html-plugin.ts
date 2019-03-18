import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration, Plugin, Entry } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';

const template = resolve(`${__dirname}/../src/assets/template.ejs`);

const buildPagePlugin = (
  entryPoint: string,
  commonChunks: string[],
  minify: boolean,
): Plugin => new HtmlWebpackPlugin({
  title: 'Biotope Boilerplate Project',
  description: 'Biotope - The Frontend Ecosystem Framework',
  keywords: 'biotope,boilerplate,project',
  author: 'Virtual Identity',
  cache: false,
  filename: resolve(`${__dirname}/../dist/${entryPoint}.html`),
  template,
  ...(minify ? {
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      quoteCharacter: '"',
      removeComments: true,
    },
  } : {}),
  chunks: [
    entryPoint,
    ...commonChunks,
  ],
});

export const addHtmlPlugin = (config: Configuration, environment: string): Configuration => {
  const minify = environment === 'prod';

  if (config.optimization && config.optimization.splitChunks) {
    const commonChunks = Object.keys(config.optimization.splitChunks.cacheGroups || {});

    Object.keys(config.entry as Entry).forEach((key) => {
      (config.plugins as Plugin[]).push(buildPagePlugin(key, commonChunks, minify));
    });

    if (config.output && config.output.publicPath) {
      // eslint-disable-next-line no-param-reassign
      config.output.publicPath = `${config.output.publicPath.split('/').filter(p => !!p).join('/')}/`;
    }
  }

  return config;
};
