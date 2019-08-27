const { join } = require('path');
const merge = require('webpack-merge');

module.exports = merge(require('./webpack.config'), {
  devtool: 'cheap-module-source-map',
  module: {
    rules: [

    ],
  },

  plugins: [

  ],

  devServer: {
    host: '0.0.0.0',
    port: 3001,
    contentBase: join(__dirname, 'public'),
    historyApiFallback: true,
    hot: true,
  },
});