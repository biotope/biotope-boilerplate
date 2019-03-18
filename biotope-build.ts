import { sync as glob } from 'glob';
import { Options, defaultOptions } from '@biotope/build';

import {
  addReact,
  addHtmlPlugin,
  addFaviconsPlugin,
  addManifestPlugin,
} from './config';

const entryPoints = glob('./src/bundles/*.ts*')
  .map(file => file.split('/').pop() || '')
  .filter(file => file);

const options: Options = {
  compilation: {
    alias: {
      '^components$': './src/components',
      '^elements$': './src/elements',
      '^services$': './src/services',
      '^theme$': './src/theme/index.scss',
    },
    entryPoints,
    extensions: ['.tsx'].concat(defaultOptions.compilation.extensions),
    style: {
      extract: true,
    },
  },
  runtime: {
    BREAKPOINTS: {
      SMALL_MIN: '600px',
      MEDIUM_MIN: '800px',
      LARGE_MIN: '1200px',
      EXTRA_LARGE_MIN: '1800px',
    },
    COMPONENTS: {
      BASE_URL: 'http://localhost',
      CORE_MODULE_NAME: 'biotope-boilerplate',
    },
    ENVIRONMENT: 'local',
    ROOTID: 'app',

    development: {
      ENVIRONMENT: 'development',
    },

    production: {
      ENVIRONMENT: 'production',
    },
  },
  overrides(config, env) {
    // FIXME - remove this line to split the app in chunks automatically.
    // Chunks are being disabled since 2 webpack bundles with code-splitting dont work well together
    // Even if all chunks have different names.
    // This only happens when both projects are in production mode.
    // eslint-disable-next-line no-param-reassign,@typescript-eslint/no-explicit-any
    (config as any).optimization.splitChunks.cacheGroups = {};

    addReact(config);
    addHtmlPlugin(config, env);
    addFaviconsPlugin(config, env);
    addManifestPlugin(config, env);

    return config;
  },
};

export = options;
