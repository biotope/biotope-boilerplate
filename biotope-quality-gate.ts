// eslint-disable-next-line import/no-extraneous-dependencies
import * as biotopeQualityGate from '@biotope/quality-gate';

const options = {
  ...biotopeQualityGate,
  globals: {
    ENVIRONMENT: true,
    ROOTID: true,
  },
};

export = options;
