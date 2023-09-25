const path = require('path');

module.exports = {
	entry: './src/wproofreadersdk.js',

	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'wproofreadersdk.js',
	},

	// Useful for debugging.
	devtool: 'eval-source-map',

	// By default webpack logs warnings if the bundle is bigger than 200kb.
	performance: { hints: false }
};
