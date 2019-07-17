
interface BiotopeConfigurationBiotopeInterface {
	iOS: string;
	safari: string;
	iOS7: string;
	IEMobile: string;
	IE: boolean;
	touch: boolean;
}

interface BiotopeConfigurationDataInterface {
	staticResourcesBase: string;
	staticResourcesContentRepoBase: string;
}

interface BiotopeConfigurationInterface {
	biotope?: BiotopeConfigurationBiotopeInterface;
	data?: BiotopeConfigurationDataInterface;
}

class BiotopeConfiguration {
	public static _data: BiotopeConfigurationInterface = {};

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

class Biotope {
	public configuration : BiotopeConfiguration;
	constructor () {
		this.configuration = BiotopeConfiguration;
	}
}

(<any>window).biotope = new Biotope;
