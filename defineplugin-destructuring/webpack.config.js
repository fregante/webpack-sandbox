const {DefinePlugin} = require('webpack');
module.exports = {
	plugins: [
		new DefinePlugin({
			'process.env': JSON.stringify({NAME: process.env.NAME}),
		})
	]
};
