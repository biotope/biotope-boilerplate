import {expect} from 'chai';
import {deepGet} from './deepGet';

describe('#deepGet', () => {
	it('returns initial object for no key', () => {
		const initialObject = {};
		const returnedValue = deepGet(initialObject, undefined);

		expect(returnedValue).to.deep.equal(initialObject);
	});

	it('gets value to single deep key', () => {
		const initialObject = {
			a: 'test'
		};
		const returnedValue = deepGet(initialObject, 'a');

		expect(returnedValue).to.equal('test');
	});

	it('sets value to multi deep key', () => {
		const initialObject = {
			a: {
				b: 'test'
			}
		};
		const returnedValue = deepGet(initialObject, 'a.b');

		expect(returnedValue).to.equal('test');
	});

	it('returns undefined for non existing value', () => {
		const initialObject = {};
		const returnedValue = deepGet(initialObject, 'a.b');

		expect(returnedValue).to.be.undefined;
	});
});
