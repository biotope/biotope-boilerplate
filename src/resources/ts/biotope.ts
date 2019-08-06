
const biotopeData: BiotopeConfigurationInterface = {};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const biotopeSet = (key: string, value: string | boolean, dataValue: IndexObjectAny = {}): any => {
  const [first, ...rest] = key.split('.');
  // eslint-disable-next-line no-param-reassign
  dataValue[first] = rest.length ? biotopeSet(rest.join('.'), value, dataValue[first]) : value;
  return dataValue;
};

(window as WindowWithBiotope).biotope = {
  configuration: {
    get data(): BiotopeConfigurationInterface {
      return biotopeData;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get: (keys: string): string | boolean => keys.split('.').reduce((accumulator, key): any => (
      accumulator[key] === undefined ? {} : accumulator[key]
    ), biotopeData),
    set: (key: string, value: string | boolean): void => biotopeSet(key, value, biotopeData),
  },
};
