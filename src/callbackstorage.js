/**
 * The class that provides functionality of storing scripts callbacks globally.
 */
export default class CallbackStorage {
	/**
	 * Creates an instance of the {@code CallbackStorage}.
	 * @public
	 */
	constructor() {
		window.WPROOFREADERSDK_SRC_STORAGE = window.WPROOFREADERSDK_SRC_STORAGE || {};

		this._storage = window.WPROOFREADERSDK_SRC_STORAGE;
	}

	/**
	 * Checks if the script with provided source exists.
	 * @public
	 *
	 * @param {String} src - A source of the script.
	 * @returns {Boolean} `true` if script with provided src exists, `false` otherwise.
	 */
	has(src) {
		return !!this._storage[src];
	}

	/**
	 * Adds script src with callbacks to the storage.
	 * @public
	 *
	 * @param {String} src - A source of the script.
	 * @param {Function} onLoad - An onLoad script callback.
	 * @param {Function} onError - An onError script callback.
	 */
	add(src, onLoad, onError) {
		this._storage[src] = this._storage[src] || { onLoad: [], onError: [] };

		this._storage[src].onLoad.push(onLoad);
		this._storage[src].onError.push(onError);
	}

	/**
	 * Executes a provided callback function once for each onLoad script callback.
	 * @public
	 *
	 * @param {String} src - A source of the script.
	 * @param {Function} callback - A function to be executed for each onload callback.
	 */
	eachOnLoad(src, callback) {
		this._storage[src].onLoad.forEach(callback);
	}

	/**
	 * Executes a provided callback function once for each onError script callback.
	 * @public
	 *
	 * @param {String} src - A source of the script.
	 * @param {Function} callback -  A function to be executed for each onload callback.
	 */
	eachOnError(src, callback) {
		this._storage[src].onError.forEach(callback);
	}

	/**
	 * Deletes the stored elements by provided source.
	 * @public
	 *
	 * @param {String} src - A source of the script.
	 */
	delete(src) {
		delete this._storage[src];
	}
}
