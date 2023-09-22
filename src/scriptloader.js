import CallbackStorage from './callbackstorage';

const DEFAULT_SRC = 'https://svc.webspellchecker.net/spellcheck31/wscbundle/wscbundle.js';

/**
 * The class that provides the functionality of asynchronous scripts loading.
 */
export default class ScriptLoader {
	/**
	 * Creates an instance of the {@code ScriptLoader}.
	 * @public
	 *
	 * @param {String} src - A source script URL.
	 */
	constructor(src) {
		this._src = src || DEFAULT_SRC;
		this._callbackStorage = new CallbackStorage();
	}

	/**
	 * Loads script by the source URL.
	 * @public
	 *
	 * @returns {Promise} A promise resolved after the script is loaded.
	 */
	load() {
		return new Promise((resolve, reject) => {
			if (!this._isScriptOnPage()) {
				this._addScriptToPage(resolve, reject);
			} else {
				this._processExistingScript(resolve, reject);
			}
		});
	}

	/**
	 * Checks if the script exists on the page.
	 * @private
	 *
	 * @returns {Boolean} `true` if the script exists on the page, `false` otherwise.
	 */
	_isScriptOnPage() {
		return !!document.querySelector(`script[src="${this._src}"]`);
	}

	/**
	 * Adds script to the page.
	 * @private
	 *
	 * @param {Function} resolve - Resolve callback.
	 * @param {Function} reject - Reject callback.
	 */
	_addScriptToPage(resolve, reject) {
		const pageElement = document.head || document.documentElement;

		this._script = this._createScriptElement();

		this._callbackStorage.add(this._src, resolve, reject);

		this._script.onload = () => this._handleScriptOnLoad();
		this._script.onerror = () => this._handleScriptOnError();

		pageElement.appendChild(this._script);
	}

	/**
	 * Creates the script element.
	 * @private
	 *
	 * @returns {HTMLElement} Created script element.
	 */
	_createScriptElement() {
		const script = document.createElement('script');

		script.type = 'text/javascript';
		script.charset = 'UTF-8';
		script.src = this._src;

		return script;
	}

	/**
	 * Handles onload script event.
	 * @private
	 */
	_handleScriptOnLoad() {
		this._callbackStorage.eachOnLoad(this._src, (callback) => {
			callback();
		});

		this._destroy();
	}

	/**
	 * Destroys the {@code ScriptLoader}.
	 * @private
	 */
	_destroy() {
		this._callbackStorage.delete(this._src);

		this._script.onload = null;
		this._script.onerror = null;
		this._script = null;
	}

	/**
	 * Handles onerror script event.
	 * @private
	 */
	_handleScriptOnError() {
		const error = new Error(`Failed to load ${this._src}.`);

		this._callbackStorage.eachOnError(this._src, (callback) => {
			callback(error);
		});

		this._destroy();
	}

	/**
	 * Processes existing script.
	 * @private
	 *
	 * @param {Function} resolve - Resolve callback.
	 * @param {Function} reject - Reject callback.
	 */
	_processExistingScript(resolve, reject) {
		if (this._callbackStorage.has(this._src)) {
			this._callbackStorage.add(this._src, resolve, reject);
		} else {
			resolve();
		}
	}
}
