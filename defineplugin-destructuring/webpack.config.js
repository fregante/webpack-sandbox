const {DefinePlugin} = require('webpack');
module.exports = {
	entry: {
		main: './main.js',
	},
	plugins: [
		new DefinePlugin({
			'process.env': JSON.stringify({NAME: process.env.NAME}),
		})
	]
};
