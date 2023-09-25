/**
 * The class that initializes {@code WProofreader} with passed options.
 */
export default class Initializer {
	/**
	 * Creates an instance of the {@code Initializer}.
	 * @public
	 *
	 * @param {Object} options - Options to initialize the {@code WProofreader}.
	 */
	constructor(options) {
		this._options = options;
	}

	/**
	 * Initializes {@code WProofreader} with passed options in defined container.
	 * @public
	 *
	 * @returns {Promise} A promise resolved once the {@code WProofreader} is initialized.
	 */
	init() {
		if (!this._options.container) {
			return Promise.reject(new Error('Container is not defined.'));
		}

		return new Promise((resolve, reject) => {
			window.WEBSPELLCHECKER.init(this._options, resolve, reject);
		});
	}
}
