import { resolve } from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration, Plugin } from 'webpack';
import * as FaviconsWebpackPlugin from 'favicons-webpack-plugin';

const allVariants = [
  'android',
  'appleIcon',
  'appleStartup',
  'coast',
  'firefox',
  'opengraph',
  'twitter',
  'yandex',
  'windows',
];

const listToVariants = (variants: string[], defaultValue: boolean): IndexObject<boolean> => variants
  .reduce((collection, variant) => ({
    ...collection,
    [variant]: defaultValue,
  }), {});

export const addFaviconsPlugin = (config: Configuration, environment: string): Configuration => {
  const minify = environment === 'prod';

  (config.plugins as Plugin[]).push(new FaviconsWebpackPlugin({
    title: 'Biotope Boilerplate Project',
    logo: resolve(`${__dirname}/../src/assets/favicon.png`),
    prefix: 'favicon/',
    persistentCache: false,
    icons: {
      favicons: true,
      ...listToVariants(allVariants, minify),
    },
  }));

  return config;
};
