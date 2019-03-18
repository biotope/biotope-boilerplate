
declare interface BiotopeObject {
  components: IndexObject<typeof import('@biotope/element').default>;
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
declare const ENVIRONMENT: string;
