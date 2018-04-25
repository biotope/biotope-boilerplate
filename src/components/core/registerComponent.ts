import {BiotopeComponent} from './BiotopeComponent';
import {Store} from 'redux';
import {camel2Dash} from './camelToDash';

export const registerComponent = (componentCreator: (store: Store) => BiotopeComponent) => {
	const component = componentCreator(window['biotope'].store);
	const componentName = camel2Dash(component['name']);
	if (!customElements.get(componentName)) {
		customElements.define(componentName, component as any);
	}
};
