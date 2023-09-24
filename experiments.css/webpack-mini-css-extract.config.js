const path = require("path");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  mode: "production",
  output: {
    publicPath: ''
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
        ],
      },
    ]
  },
  plugins: [
    new MiniCssExtractPlugin(),
  ],
};
