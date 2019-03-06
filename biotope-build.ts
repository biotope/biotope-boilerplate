import { Options } from '@biotope/build';

const getVariables = (environment: string): IndexObjectAny => ({
  [environment]: { ENVIRONMENT: environment },
});

const defaultExternalFiles = [{
  from: './src/resources',
  to: 'resources',
  ignore: ['*.md'],
}];

const options: Options = {
  compilation: {
    alias: {
      '^components$': './src/components',
      '^services$': './src/services',
      '^theme$': './src/theme/index.scss',
    },
    externalFiles: [
      ...defaultExternalFiles,
      ...['', 'bundles/'].map(folder => ({
        from: `./node_modules/@webcomponents/webcomponentsjs/${folder}*.js`,
        to: `polyfills/${folder}`,
        flatten: true,
      })),
    ],
    entryPoints: {
      'bio-header': 'bio-header.ts',
    },
  },
  runtime: {
    ENVIRONMENT: 'local',

    ...getVariables('development'),
    ...getVariables('production'),
  },
};

export = options;
