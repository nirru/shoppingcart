import express from 'express';
import config from './config';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from '../webpack.config';
import bodyParser from 'body-parser';
import webpack from 'webpack';

const app = express();
const compiler = webpack(webpackConfig);

// app.use(express.static('public'));


// app.use(webpackDevMiddleware(compiler, {
//   hot: true,
//   filename: 'bundle.js',
//   publicPath: 'public',
//   stats: {
//     colors: true,
//   },
//   historyApiFallback: true,
// }));
// //
//
// app.use(webpackHotMiddleware(compiler, {
//   log: console.log,
//   path: '/__webpack_hmr',
//   heartbeat: 10 * 1000,
// }));


app.set('view engine','ejs');


// app.use(
//   require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: webpackConfig.output.publicPath
//   })
// );
//
// app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static('public'));

app.get('/',(req,res) => {
  res.render('index',{answer:42});
});

app.listen(config.port,function listenHandler() {
  console.log(`Server running on Port ${config.port}...`);
});
