
interface biotopeConfigurationBiotopeInterface {
	iOS: string;
	safari: string;
	iOS7: string;
	IEMobile: string;
	IE: boolean;
	touch: boolean;
}

interface biotopeConfigurationDataInterface {
	staticResourcesBase: string;
	staticResourcesContentRepoBase: string;
}

interface biotopeConfigurationInterface {
	biotope?: biotopeConfigurationBiotopeInterface;
	data?: biotopeConfigurationDataInterface;
}

class biotopeConfiguration {
	public static _data: biotopeConfigurationInterface = {};

	public static set(key: string, value: string & boolean) : void {
		this.setAux(key, value, this._data);
	}

	public static get(key: string) {
		return key.split('.').reduce((o, i) => o[i], this._data);
	}

	private static setAux(key: string, value: string & boolean, dataValue: object = {}) : object {
		const [ first, ...rest ] = key.split('.');
		if (rest.length) {
			dataValue[first] = this.setAux(rest.join('.'), value, dataValue[first]);
		}
		else {
			dataValue[first] = value;
		}
		return dataValue;
	}
}

class biotope {
	public configuration : biotopeConfiguration;
	constructor () {
		this.configuration = biotopeConfiguration;
	}
}

(<any>window).biotope = new biotope;
