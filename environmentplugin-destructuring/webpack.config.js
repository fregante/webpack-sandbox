const {EnvironmentPlugin} = require('webpack');
module.exports = {
	entry: {
		main: './main.js',
	},
	plugins: [
		new EnvironmentPlugin({
			NAME: undefined
		})
	]
};
