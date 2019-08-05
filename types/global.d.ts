
// BASE DEFINITIONS

declare interface IndexObject<T> {
  [key: string]: T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any,@typescript-eslint/no-empty-interface
declare interface IndexObjectAny extends IndexObject<any> {}

declare module '*.scss' {
  interface ImportedStyle extends IndexObject<string> {
    // FIXME: toString should be specified as described in the comment beside it, but due to the
    // definition of IndexObject, the value of all keys should be of the same type (string).
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    toString: any; // should be of type "() => string"
  }
  const style: ImportedStyle;
  export = style;
}

declare module '*.svg' {
  const content: string;
  // eslint-disable-next-line import/no-default-export
  export default content;
}

// FIXME: Typescript limitation on importing deconstructed json files
// declare module '*.json' {
//   const content: IndexObjectAny;
//   export = content;
// }
declare module '*.json';

// ENVIRONMENT VARIABLES DEFINITION

interface BiotopeConfigurationBiotopeInterface {
  iOS: string;
  safari: string;
  iOS7: string;
  IEMobile: string;
  IE: boolean;
  touch: boolean;
}

interface BiotopeConfigurationDataInterface {
  staticResourcesBase: string;
  staticResourcesContentRepoBase: string;
}

interface BiotopeConfigurationInterface {
  biotope?: BiotopeConfigurationBiotopeInterface;
  data?: BiotopeConfigurationDataInterface;
}

interface BiotopeConfiguration {
  data: BiotopeConfigurationInterface;
  get: (key: string) => string | boolean;
  set: (key: string, value: string | boolean) => void;
}

declare const biotope: {
  configuration: BiotopeConfiguration;
};

declare interface WindowWithBiotope extends Window {
  biotope: typeof biotope;
}
