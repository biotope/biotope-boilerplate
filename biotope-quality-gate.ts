// eslint-disable-next-line import/no-extraneous-dependencies
import * as biotopeQualityGate from '@biotope/quality-gate';

const options: typeof biotopeQualityGate = {
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // eslint-disable-next-line global-require,import/no-extraneous-dependencies
    ...require('@biotope/quality-gate/config/recommended').rules,

    // React rules incompatible with recommended Js and Ts rules
    'react/jsx-filename-extension': 'off',
    'react/sort-comp': 'off',
  },
  env: {
    browser: true,
  },
  globals: {
    biotope: true,
    BREAKPOINTS: true,
    COMPONENTS: true,
    ENVIRONMENT: true,
    ROOTID: true,
  },
};

export = options;
