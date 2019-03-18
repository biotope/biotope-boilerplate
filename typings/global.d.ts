// eslint-disable-next-line @typescript-eslint/no-triple-slash-reference,spaced-comment
/// <reference path="./elements.d.ts" />

declare interface BiotopeObject {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  components: IndexObject<any>;
  events: IndexObject<boolean>;
}

declare interface WindowWithBiotope extends Window {
  biotope: BiotopeObject;
}

declare const biotope: BiotopeObject;

declare const BREAKPOINTS: {
  SMALL_MIN: string;
  MEDIUM_MIN: string;
  LARGE_MIN: string;
  EXTRA_LARGE_MIN: string;
};
declare const COMPONENTS: {
  BASE_URL: string;
  CORE_MODULE_NAME: string;
};
declare const ENVIRONMENT: string;
declare const ROOTID: string;
