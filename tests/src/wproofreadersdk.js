import WProofreaderSDK from '../../src/wproofreadersdk';
import ScriptLoader from '../../src/scriptloader';
import Initializer from '../../src/initializer';
import ConfigCreator from '../../src/configcreator';

const { expect } = require('chai');
const sinon = require('sinon');

describe('WProofreaderSDK', () => {
	let loadStub;

	before(() => {
		loadStub = sinon.stub(ScriptLoader.prototype, 'load');
	});

	after(() => {
		loadStub.restore();
	});

	afterEach(() => {
		sinon.reset();
	});

	describe('init method', () => {
		const initOptions = {
			lang: 'en_US',
			serviceId: 'your-service-ID',
			container: document.createElement('div')
		};
		let initStub;

		before(() => {
			initStub = sinon.stub(Initializer.prototype, 'init');
		});

		after(() => {
			initStub.restore();
		});

		it('should return rejected promise if script wasn\'t loaded', () => {
			const loadError = new Error('Script wasn\'t loaded.');

			loadStub.rejects(loadError);

			return WProofreaderSDK.init(initOptions)
				.catch((error) => expect(error).to.equal(loadError));
		});

		it('should return rejected promise if WProofreader wasn\'t initialized', () => {
			const initializationError = new Error('Initialization failed.');

			loadStub.resolves();
			initStub.rejects(initializationError);

			return WProofreaderSDK.init(initOptions)
				.catch((error) => expect(error).to.equal(initializationError));
		});

		it('should load script and initialize WProofreader', () => {
			loadStub.resolves();
			initStub.resolves();

			return WProofreaderSDK.init(initOptions)
				.then(() => {
					expect(loadStub.calledOnce).to.be.true;
					expect(initStub.calledOnce).to.be.true;
				});
		});
	});

	describe('configure method', () => {
		const configureOptions = {
			lang: 'en_US',
			serviceId: 'your-service-ID',
			container: document.createElement('div')
		};
		let createStub;

		before(() => {
			createStub = sinon.stub(ConfigCreator.prototype, 'create');
		});

		after(() => {
			createStub.restore();
		});

		it('should return rejected promise if script wasn\'t loaded', () => {
			const loadError = new Error('Script wasn\'t loaded.');

			loadStub.rejects(loadError);

			return WProofreaderSDK.configure(configureOptions)
				.catch((error) => expect(error).to.equal(loadError));
		});

		it('should create config and load script', () => {
			loadStub.resolves('Script loaded');

			return WProofreaderSDK.configure(configureOptions)
				.then((result) => {
					expect(createStub.calledOnce).to.be.true;
					expect(loadStub.calledOnce).to.be.true;
					expect(result).to.equal('Script loaded');
				});
		});
	});
});
