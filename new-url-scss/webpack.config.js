import MiniCssExtractPlugin from "mini-css-extract-plugin";

const config = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        resourceQuery: /url/,
        type: "asset/resource",
        generator: {
          // Must include ".css" or else it may output .scss files
          filename: "css/[name].css",
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              sassOptions: {
                quietDeps: true,
                silenceDeprecations: [
                  "import",
                  "color-functions",
                  "global-builtin",
                ],
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
};

export default config;
