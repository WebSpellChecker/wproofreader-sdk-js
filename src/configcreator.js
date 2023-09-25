/**
 * The class that creates global {@code WProofreader} configuration.
 */
export default class ConfigCreator {
	/**
	 * Creates an instance of the {@code ConfigCreator}.
	 * @public
	 *
	 * @param {Object} options - Options for environment definition.
	 */
	constructor(options) {
		this._options = options;
	}

	/**
	 * Creates config with passed options.
	 * @public
	 */
	create() {
		window.WEBSPELLCHECKER_CONFIG = window.WEBSPELLCHECKER_CONFIG || this._options;
	}
}
