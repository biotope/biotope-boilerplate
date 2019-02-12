const biotopeQualityGate = require('@biotope/quality-gate');

module.exports = {
  ...biotopeQualityGate,
  globals: {
    ENVIRONMENT: true,
    ROOTID: true,
  },
};
