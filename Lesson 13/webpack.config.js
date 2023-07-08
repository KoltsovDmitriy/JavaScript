const path = require('path');
const HTMLWebPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new HTMLWebPlugin({
        template: './index.html'
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
        patterns: [
            { from: './img', to: 'img' },
            { from: './css', to: 'css' },
          ]
    })
  ],
};