import * as biotopeQualityGate from '@biotope/quality-gate';
import * as mergeDeep from 'merge-deep';

const options = mergeDeep(biotopeQualityGate, {
  rules: {
    'import/no-extraneous-dependencies': 'off',
  },
  globals: {
    ENVIRONMENT: true,
    ROOTID: true,
  },
});

export = options;
