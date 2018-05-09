// TODO store should be some Store adapter type and not directly bound to Redux or any other state management storage
export interface biotopeStateOptions {
	store: any,
	key?: string
}

// might be something like jsonLdToState decorator
export const biotopeStateClassDecorator = (param1: biotopeStateOptions) => {
    return (target: Function) => {
        console.log('param1', param1);
        console.log('target', target);
    };
};

// this decorator is bound directly to the state property inside a web component
export const biotopeStatePropertyDecorator = (param: biotopeStateOptions) => {
	return (target: any, key: string) => {
		console.log('param', param);
		console.log('target', target);
		console.log('key', key);
	};
};

export const biotopeStateMethodDecorator = (param: biotopeStateOptions) => {
	return function (target: any, key: string, descriptor: PropertyDescriptor) {
		console.log('param', param);
		console.log('target', target);
		console.log('key', key);
		console.log('descriptor', descriptor);

		const oldValue = descriptor.value;

		descriptor.value = function() {
			console.log(`Calling "${key}" with`, arguments,target);

			// Executing the original function interchanging the arguments
			let value = oldValue.apply(null, [arguments[1], arguments[0]]);

			//returning a modified value
			return value + "; This is awesome";
		};

		return descriptor;
	};
}
