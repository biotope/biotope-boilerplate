export const deepGet = (object: object, key: string): any => {
	const objectCopy = {...object};
	if(!key) {
		return objectCopy;
	}

	const keys = key.split('.');
	let property = objectCopy;
	for (let i = 0; i < keys.length; i++ ) {
		const currentKey = keys[i];
		if(property) {
			property = property[currentKey];
		}
	}
	return property;
};
