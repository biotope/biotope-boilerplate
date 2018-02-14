export const deepSet = (object: object = {}, key: string = '', value: any): object => {
	const objectCopy = {...object};
	if(!key || !value) {
		return objectCopy;
	}

	let property = objectCopy;
	const keys = key.split('.');

	const lastKeyIndex = keys.length - 1;

	for (let i = 0; i <= lastKeyIndex; i++) {
		const currentKey = keys[i];

		if(typeof property === 'object') {
			if(!property.hasOwnProperty(currentKey)) {
				property[currentKey] = {};
			}

			if(i === lastKeyIndex) {
				property[currentKey] = value;
			} else {
				property = property[currentKey];
			}
		}
	}

	return objectCopy;
};
