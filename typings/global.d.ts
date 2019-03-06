
declare interface BiotopeObject {
  components: IndexObject<typeof import('@biotope/element').default>;
}

declare const biotope: BiotopeObject;

declare const ENVIRONMENT: string;
declare const ROOTID: string;
