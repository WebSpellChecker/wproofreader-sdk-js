import ScriptLoader from '../../src/scriptloader';

const { expect } = require('chai');
const sinon = require('sinon');

describe('ScriptLoader', () => {
	const src = 'http://localhost:9876/base/tests/mocks/mock-wscbundle.js';
	const scriptLoader = new ScriptLoader(src);

	afterEach(() => {
		const script = document.querySelector(`script[src="${src}"]`);

		if (script) {
			script.remove();
			delete window.WEBSPELLCHECKER;
		}

		sinon.reset();
	});

	it('should add script to the page', () => {
		return scriptLoader.load()
			.then(() => {
				expect(document.querySelector(`script[src="${src}"]`)).to.be.exist;
			});
	});

	it('should add default script if src is not defined', () => {
		const defaultSrc = 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js';

		return new ScriptLoader().load()
			.then(() => {
				const script = document.querySelector(`script[src="${defaultSrc}"]`);

				expect(script).to.be.exist;

				script.remove();
			});
	});

	it('should not duplicate script if it is already exists', () => {
		const script = document.createElement('script');

		script.src = src;
		document.head.appendChild(script);

		return scriptLoader.load()
			.then(() => {
				expect(document.querySelectorAll(`script[src="${src}"]`).length).to.equal(1);
			});
	});

	it('should append script to the documentElement if head element is unavailable', () => {
		const headStub = sinon.stub(document, 'head').get(() => undefined);

		return scriptLoader.load()
			.then(() => {
				headStub.restore();

				expect(document.head.querySelector(`script[src="${src}"]`)).to.be.null;
				expect(document.documentElement.querySelector(`script[src="${src}"]`)).to.be.exist;
			});
	});

	it('should return resolved promise if the script successfully loaded', () => {
		return scriptLoader.load()
			.then(() => {
				const script = document.querySelector(`script[src="${src}"]`);

				expect(window.WEBSPELLCHECKER).to.be.exist;
				expect(script.onload).to.be.null;
				expect(script.onerror).to.be.null;
			});
	});

	it('should return rejected promise if script unsuccessfully loaded', () => {
		const wrongSrc = 'wrongSrc';

		return new ScriptLoader(wrongSrc).load()
			.catch((error) => {
				const script = document.querySelector(`script[src="${wrongSrc}"]`);

				expect(error.message).to.equal(`Failed to load ${wrongSrc}.`);
				expect(script.onload).to.be.null;
				expect(script.onerror).to.be.null;

				script.remove();
			});
	});

	it('should load the script only once', () => {
		const singleScriptSrc = 'http://localhost:9876/base/tests/mocks/mock-script.js';

		return Promise.all([
			new ScriptLoader(singleScriptSrc).load(),
			new ScriptLoader(singleScriptSrc).load()
		]).then(() => {
			expect(window.SCRIPT_DOWNLOAD_COUNT).to.equal(1);
		});
	});
});
