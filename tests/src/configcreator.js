import ConfigCreator from '../../src/configcreator';

const { expect } = require('chai');

describe('ConfigCreator', () => {
	const options = {
		lang: 'en_US',
		serviceId: 'your-service-ID'
	};

	afterEach(() => {
		delete window.WEBSPELLCHECKER_CONFIG;
	});

	it('should create config', () => {
		new ConfigCreator(options).create();

		expect(window.WEBSPELLCHECKER_CONFIG).to.be.exist;
		expect(window.WEBSPELLCHECKER_CONFIG.lang).to.equal(options.lang);
		expect(window.WEBSPELLCHECKER_CONFIG.serviceId).to.equal(options.serviceId);
	});

	it('should not override defined config', () => {
		window.WEBSPELLCHECKER_CONFIG = { customConfig: true };

		new ConfigCreator(options).create();

		expect(Object.keys(window.WEBSPELLCHECKER_CONFIG).length).to.equal(1);
		expect(window.WEBSPELLCHECKER_CONFIG.customConfig).to.be.true;
	});
});
