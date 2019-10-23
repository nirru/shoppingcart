'use strict';
const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// const NODE_ENV = process.env.NODE_ENV || 'development';
// module.exports = {
//   entry: [
//     '@babel/polyfill',
//     path.join(__dirname, 'src', 'components/index.js'),
//   ],
//
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: 'babel-loader'
//         },options: {
//           presets: ['env', { modules: false }]
//         }
//       },
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader']
//       },
//       {
//         test: /\.ejs$/,
//         loader: 'ejs-loader?variable=data'
//       }
//     ],
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx']
//   },
//
//   output: {
//     path: path.join(__dirname, 'public'),
//     filename: 'bundle.js',
//     publicPath: '/'
//   },
//   plugins: [
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebPackPlugin({
//       title: 'React Starter Kit',
//       hash: true,
//       inject: false,
//       appMountId: 'root',
//       template: '!!ejs-loader!./views/index.ejs'
//     })
//   ],
//   devServer: {
//     hot: true,
//     historyApiFallback: true
//   }
// };




module.exports = {
  entry: [
    '@babel/polyfill',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader', options: { minimize: true } }]
      },
      {
        test: /\.(png|jpe?g)/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: './img/[name].[ext]',
              limit: 10000
            }
          },
          {
            loader: 'img-loader'
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.ejs$/,
        loader: 'ejs-loader?variable=data'
      }
    ]
  },
  plugins: [
    // new HtmlWebPackPlugin({
    //   title: 'React Starter Kit',
    //   hash: true,
    //   inject: false,
    //   appMountId: 'root',
    //   // template: '!!ejs-loader!./views/index.ejs'
    //   template: './public/index.html'
    // }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        API_URL: JSON.stringify(process.env.API_URL),
        IMAGE_URL: JSON.stringify(process.env.IMAGE_URL),
        VIDEO_URL: JSON.stringify(process.env.VIDEO_URL),
      }
    }),

    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
    port:8087
  }
};
