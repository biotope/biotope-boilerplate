// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration, Plugin } from 'webpack';
import * as ManifestJsonWebpackPlugin from 'manifest-json-webpack-plugin';

export const addManifestPlugin = (config: Configuration, environment: string): Configuration => {
  const minify = environment === 'prod';

  (config.plugins as Plugin[]).push(new ManifestJsonWebpackPlugin({
    path: '../',
    pretty: !minify,
    name: 'Boilerplate',
    description: 'Biotope - The Frontend Ecosystem Framework',
    lang: 'en',
    icons: 'favicon/',
  }));

  return config;
};
