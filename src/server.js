// import express from 'express';
// import config from './config';
// import webpackConfig from '../webpack.config';
// import webpack from 'webpack';
//
// const app = express();
// const compiler = webpack(webpackConfig);
//
// // app.use(express.static('public'));
//
//
// // app.use(webpackDevMiddleware(compiler, {
// //   hot: true,
// //   filename: 'bundle.js',
// //   publicPath: 'public',
// //   stats: {
// //     colors: true,
// //   },
// //   historyApiFallback: true,
// // }));
// // //
// //
// // app.use(webpackHotMiddleware(compiler, {
// //   log: console.log,
// //   path: '/__webpack_hmr',
// //   heartbeat: 10 * 1000,
// // }));
//
//
// app.set('view engine','ejs');
//
//
// // app.use(
// //   require('webpack-dev-middleware')(compiler, {
// //     noInfo: true,
// //     publicPath: webpackConfig.output.publicPath
// //   })
// // );
// //
// // app.use(require('webpack-hot-middleware')(compiler));
//
// app.use(express.static('public'));
//
// app.get('/',(req,res) => {
//   res.render('index',{answer:42});
// });
//
// app.listen(config.port,function listenHandler() {
//   console.log(`Server running on Port ${config.port}...`);
// });


const path = require('path');
const express = require('express');

const DIST_DIR = path.join('dist');
const PORT = process.env.PORT || 3000;
const app = express();

//Serving the files on the dist folder
app.use(express.static(DIST_DIR));

//Send index.html when the user access the web
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(PORT,function listenHandler() {
  console.log(`Server running on Port ${PORT}...`);
});
