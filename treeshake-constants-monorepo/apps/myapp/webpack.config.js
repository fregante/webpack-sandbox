const { join } = require('path');

module.exports = {
  entry: './src/main.tsx',
  output: {
    path: join(__dirname, 'dist'),
  },
};
