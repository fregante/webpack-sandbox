module.exports = {
	entry: {
		allInOne: './main-all-in-one.js',
		needsVendor: {import: './main-needs-vendor.js', dependOn: ['vendor']},
		vendor: ['doma'],
	},
	devtool: false,
	optimization: {
		runtimeChunk: 'single',
		chunkIds: 'named', // To keep filename consistent between different modes (for example building only)
	},
	stats: {
		chunks: true,
		chunkRelations: true,
	},
};
