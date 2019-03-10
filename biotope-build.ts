import { Options, defaultOptions } from '@biotope/build';

const getVariables = (env: string): IndexObjectAny => ({
  [env]: { ENVIRONMENT: env },
});

const options: Options = {
  compilation: {
    alias: {
      '^components$': './src/components',
      '^services$': './src/services',
      '^theme$': './src/theme/index.scss',
    },
    entryPoints: [
      'bio-header.ts',
    ],
    externalFiles: [
      ...defaultOptions.compilation.externalFiles,
      ...['', 'bundles/'].map(folder => ({
        from: `./node_modules/@webcomponents/webcomponentsjs/${folder}*.js`,
        to: `polyfills/${folder}`,
        flatten: true,
      })),
    ],
  },
  runtime: {
    ENVIRONMENT: 'local',

    ...getVariables('development'),
    ...getVariables('production'),
  },
};

export = options;
