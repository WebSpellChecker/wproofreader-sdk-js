const path = require('path');

module.exports = {
	mode: 'development',

	entry: './src/index.js',
		
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},

	module: {
		rules: [{
			test: /\.css$/i,
			use: ["style-loader", "css-loader"],
		}]
	},

	devServer: {
		port: 5000,
		open: true,
		hot: false,
		static: {
			directory: path.join(__dirname),
			publicPath: '/',
			watch: true
		},
		devMiddleware: {
			publicPath: '/dist',
			writeToDisk: true
		}
	},

	devtool: false,

	resolve: {
		fallback: { util: false }
	}
};
