import ConfigCreator from './configcreator';
import Initializer from './initializer';
import ScriptLoader from './scriptloader';

/**
 * An entry point to work with {@code WProofreader}.
 * It provides the ability to define the necessary environment and run {@code WProofreader}.
 */
export default class WProofreaderSDK {
	/**
	 * Initializes {@code WProofreader} with passed config.
	 * Loads {@code WProofreader} scripts if it is necessary.
	 * @public
	 *
	 * @param {Object} [options={}] - Options to initialize the {@code WProofreader}.
	 * @returns {Promise} A promise resolved once the {@code WProofreader} is initialized.
	 */
	static init(options = {}) {
		const scriptLoader = new ScriptLoader(options.srcUrl);
		const initializer = new Initializer(options);

		return scriptLoader.load()
			.then(() => initializer.init());
	}

	/**
	 * Configures an environment for {@code WProofreader} work by creating a global
	 * {@code WProofreader} config and loading {@code WProofreader} scripts if it is necessary.
	 * @public
	 *
	 * @param {Object} [options={}] - Options for {@code WProofreader} environment.
	 * @returns {Promise} A promise resolved once the {@code WProofreader} is configured.
	 */
	static configure(options = {}) {
		const configCreator = new ConfigCreator(options);
		const scriptLoader = new ScriptLoader(options.srcUrl);

		configCreator.create();

		return scriptLoader.load();
	}
}
