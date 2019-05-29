import Component from '@biotope/element';
import loadEntry from 'load-entry';

const registerComponent = (component: typeof Component, componentName: string): void => {
  component.register();
  biotope.components[componentName] = component;
};

export const setupComponents = (components: IndexObject<typeof Component>): void => loadEntry(
  (): void => Object.keys(components).forEach((key): void => registerComponent(
    components[key], key || components[key].componentName,
  )),
  { event: !biotope.events.WebComponentsReady ? 'WebComponentsReady' : undefined },
);
