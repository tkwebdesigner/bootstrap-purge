const path = require('path');

module.exports = {
  entry: './src/js/main.js',
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
