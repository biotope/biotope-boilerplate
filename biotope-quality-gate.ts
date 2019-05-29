import * as biotopeQualityGate from '@biotope/quality-gate';
import * as mergeDeep from 'merge-deep';

const options: typeof biotopeQualityGate = {
  ...biotopeQualityGate,
  logic: mergeDeep(biotopeQualityGate.logic, {
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
    globals: {
      biotope: true,
      BREAKPOINTS: true,
      ENVIRONMENT: true,
    },
  }),
};

export = options;
