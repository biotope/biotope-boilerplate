// eslint-disable-next-line import/no-extraneous-dependencies
import {
  Configuration,
  Module,
  RuleSetLoader,
  RuleSetRule,
} from 'webpack';

export const addReact = (config: Configuration): Configuration => {
  const logicRule = (config.module as Module).rules
    .find(({ use }) => use === 'babel-loader' || (use as RuleSetLoader).loader === 'babel-loader');

  if (logicRule && logicRule.test) {
    logicRule.test = /\.(j|t)sx?$/;
  }

  if (logicRule && logicRule.use && typeof logicRule.use === 'object') {
    const options = (logicRule.use as RuleSetRule).options as IndexObjectAny;

    if (options && options.presets) {
      options.presets.push(['@babel/preset-react']);
    }
  }

  return config;
};
