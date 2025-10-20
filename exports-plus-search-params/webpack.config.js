export default {
  entry: './src/index.js',
  module: {
    rules: [
      {
        resourceQuery: /raw/,
        type: 'asset/source',
      },
    ],
  }
};
