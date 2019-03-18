
export const setupBiotope = (): void => {
  (window as WindowWithBiotope).biotope = (window as WindowWithBiotope).biotope || {};
  biotope.components = biotope.components || {};
  biotope.events = biotope.events || {};
};
