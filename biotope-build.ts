import { sync as glob } from 'glob';
import { Options, defaultOptions, ExternalFile } from '@biotope/build';

const entryPoints = glob('./src/bundles/*.ts')
  .map((file): string => file.split('/').pop() || '')
  .filter((file): boolean => !!file);

const options: Options = {
  compilation: {
    alias: {
      '^components$': './src/components',
      '^services$': './src/services',
      '^theme$': './src/theme/index.scss',
    },
    entryPoints,
    externalFiles: [
      ...defaultOptions.compilation.externalFiles,
      {
        from: './node_modules/mdn-polyfills/array.prototype.find.js',
        to: 'polyfills/array.prototype.find.js',
      },
      ...['', 'bundles/'].map((folder): ExternalFile => ({
        from: `./node_modules/@webcomponents/webcomponentsjs/${folder}*.js`,
        to: `polyfills/${folder}`,
        flatten: true,
      })),
    ],
  },
  runtime: {
    BREAKPOINTS: {
      SMALL_MIN: '600px',
      MEDIUM_MIN: '800px',
      LARGE_MIN: '1200px',
      EXTRA_LARGE_MIN: '1800px',
    },
    ENVIRONMENT: 'local',

    development: {
      ENVIRONMENT: 'development',
    },

    production: {
      ENVIRONMENT: 'production',
    },
  },
};

export = options;
