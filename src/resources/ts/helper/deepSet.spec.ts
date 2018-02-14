import {expect} from 'chai';
import {deepSet} from './deepSet';

describe('#deepSet', () => {
	it('returns initial object for no key', () => {
		const initialObject = {};
		const returnedObject = deepSet(initialObject, undefined, 'test');

		expect(returnedObject).to.deep.equal(initialObject);
	});

	it('returns initial object for no value', () => {
		const initialObject = {};
		const returnedObject = deepSet(initialObject, 'a.b.', undefined);

		expect(returnedObject).to.deep.equal(initialObject);
	});

	it('sets value to single deep key', () => {
		const initialObject = {};
		const returnedObject = deepSet(initialObject, 'a', 'test');

		expect(returnedObject['a']).to.equal('test');
	});

	it('sets value to multi deep key', () => {
		const initialObject = {};
		const returnedObject = deepSet(initialObject, 'a.b', 'test');

		expect(returnedObject['a']).to.have.key('b');
		expect(returnedObject['a']['b']).to.equal('test');
	});

	it('does not set value to multi deep key with existing object', () => {
		const initialObject = {
			a: 'blocked'
		};
		const returnedObject = deepSet(initialObject, 'a.b', 'test');

		expect(returnedObject['a']).to.not.have.key('b');
		expect(returnedObject['a']).to.equal('blocked');
	});
});
