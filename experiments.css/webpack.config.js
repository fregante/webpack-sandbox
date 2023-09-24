const path = require("path");
module.exports = {
  mode: "production",
  output: {
    path: path.resolve("dist"),
    publicPath: ''
  },
  context: path.resolve("."),
  experiments: {
    css: true,
  },
};
