import Initializer from '../../src/initializer';

const { expect } = require('chai');
const sinon = require('sinon');

describe('Initializer', () => {
	const options = {
		lang: 'en_US',
		serviceId: 'your-service-ID',
		container: document.createElement('div')
	};
	const initStub = sinon.stub();
	const initializer = new Initializer(options);

	before(() => {
		window.WEBSPELLCHECKER = { init: initStub };
	});

	after(() => {
		delete window.WEBSPELLCHECKER;
	});

	afterEach(() => {
		sinon.reset();
	});

	it('should return rejected promise if container is not defined', () => {
		const optionsWithoutContainer = {
			lang: 'en_US',
			serviceId: 'your-service-ID'
		};

		return new Initializer(optionsWithoutContainer).init()
			.catch((error) => {
				expect(initStub.callCount).to.equal(0);
				expect(error.message).to.equal('Container is not defined.');
			});
	});

	it('should return rejected promise if WProofreader wasn\'t initialized', () => {
		initStub.callsArgWith(2, new Error('Error while initialization.'));

		return initializer.init()
			.catch((error) => {
				expect(initStub.callCount).to.equal(1);
				expect(error.message).to.equal('Error while initialization.');
			});
	});

	it('should return resolved promise if WProofreader was initialized', () => {
		const instance = {};

		initStub.callsArgWith(1, instance);

		return initializer.init()
			.then((result) => {
				expect(initStub.callCount).to.equal(1);
				expect(result).to.equal(instance);
			});
	});
});
