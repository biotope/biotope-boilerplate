import Component from '@biotope/element';
import loadEntry from 'load-entry';

type Components = IndexObject<typeof Component>;

interface WindowWithBiotope extends Window {
  biotope: BiotopeObject;
}

const setupBiotopeObject = (): void => {
  const windowWithBiotpe = window as WindowWithBiotope;
  windowWithBiotpe.biotope = windowWithBiotpe.biotope || {};
  windowWithBiotpe.biotope.components = windowWithBiotpe.biotope.components || {};
};

const registerComponent = (component: typeof Component, componentName: string): void => {
  if ((window as WindowWithBiotope).biotope.components[componentName]) {
    // eslint-disable-next-line no-console
    console.warn(`Re-registering component "${componentName}".`);
  }
  component.register();
  (window as WindowWithBiotope).biotope.components[componentName] = component;
};

export const setupComponents = (components: Components): void => loadEntry(
  () => {
    setupBiotopeObject();
    Object.keys(components)
      .forEach(key => registerComponent(components[key], key || components[key].componentName));
  },
  { event: 'WebComponentsReady' },
);
