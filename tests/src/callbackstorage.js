import CallbackStorage from '../../src/callbackstorage';

const { expect } = require('chai');
const sinon = require('sinon');

describe('CallbackStorage', () => {
	const src = 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js';
	let callbackStorage;

	beforeEach(() => {
		delete window.WPROOFREADERSDK_SRC_STORAGE;

		callbackStorage = new CallbackStorage();
	});

	it('should indicate if script wasn\'t stored', () => {
		expect(callbackStorage.has(src)).to.be.false;
	});

	it('should store script', () => {
		callbackStorage.add(src, () => {}, () => {});

		expect(callbackStorage.has(src)).to.be.true;
	});

	it('should execute only onLoad callback', () => {
		const onLoadCallback = sinon.fake();
		const onErrorCallback = sinon.fake();
		const argumentCallback = sinon.fake();

		callbackStorage.add(src, onLoadCallback, onErrorCallback);

		callbackStorage.eachOnLoad(src, argumentCallback);

		expect(onErrorCallback.callCount).to.be.equal(0);
		expect(onLoadCallback.calledOnceWith(argumentCallback));
	});

	it('should execute only onError callback', () => {
		const onLoadCallback = sinon.fake();
		const onErrorCallback = sinon.fake();
		const argumentCallback = sinon.fake();

		callbackStorage.add(src, onLoadCallback, onErrorCallback);

		callbackStorage.eachOnError(src, argumentCallback);

		expect(onLoadCallback.callCount).to.be.equal(0);
		expect(onErrorCallback.calledOnceWith(argumentCallback));
	});

	it('should execute all onLoad callbacks', () => {
		const firstCallback = sinon.fake();
		const secondCallback = sinon.fake();
		const argumentCallback = sinon.fake();

		callbackStorage.add(src, firstCallback, () => {});
		callbackStorage.add(src, secondCallback, () => {});

		callbackStorage.eachOnLoad(src, argumentCallback);

		expect(firstCallback.calledOnceWith(argumentCallback));
		expect(secondCallback.calledOnceWith(argumentCallback));
	});

	it('should execute all onError callbacks', () => {
		const firstCallback = sinon.fake();
		const secondCallback = sinon.fake();
		const argumentCallback = sinon.fake();

		callbackStorage.add(src, () => {}, firstCallback);
		callbackStorage.add(src, () => {}, secondCallback);

		callbackStorage.eachOnError(src, argumentCallback);

		expect(firstCallback.calledOnceWith(argumentCallback));
		expect(secondCallback.calledOnceWith(argumentCallback));
	});

	it('should delete stored script', () => {
		callbackStorage.add(src, () => {}, () => {});

		expect(callbackStorage.has(src)).to.be.true;

		callbackStorage.delete(src);

		expect(callbackStorage.has(src)).to.be.false;
	});

	it('should store callbacks globally', () => {
		callbackStorage.add(src, () => {}, () => {});

		expect(new CallbackStorage().has(src)).to.be.true;
	});
});
