const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const chalk = require('chalk');

const CLIENT_SRC = path.resolve(`${__dirname}/..`, 'client/node_modules');

const webpack = require(path.resolve(CLIENT_SRC, 'webpack'));
const webpackDevMiddleware = require(path.resolve(CLIENT_SRC, 'webpack-dev-middleware'));
const webpackHotMiddleware = require(path.resolve(CLIENT_SRC, 'webpack-hot-middleware'));
const webpackConfig = require('../client/webpack/webpack.dev');

const middlewares = require('./middlewares');
const dbConfig = require('./config').db;

const compiler = webpack(webpackConfig);

const {
  cyan: connected,
  yellow: error,
  red: disconnected,
  magenta: termination
} = chalk.bold;



// Set up Mongoose
/* mongoose.connect(dbConfig.development, { useNewUrlParser: true })
  .then(() => console.log('mongodb connection successful!'))
  .catch((err) => console.error(err)); */

/* NOTE
  -dbConfig.development
  -dbConfig.mlab

  useCreateIndex: true

  From the Security section of the left navigation, click Network Access.The IP Whitelist tab displays.
*/

mongoose.connect(dbConfig.mlab, { useNewUrlParser: true });

mongoose.connection.on('connected', function() {
  console.log(connected("Mongoose default connection is open to ", dbConfig.mlab));
});

mongoose.connection.on('error', function(err) {
  console.log(error(`Mongoose default connection has occured ${err} error`));
});

mongoose.connection.on('disconnected', function() {
  console.log(disconnected("Mongoose default connection is disconnected"));
});

process.on('SIGINT', function() {
  mongoose.connection.close(function() {
    console.log(termination("Mongoose default connection is disconnected due to application termination"));
    process.exit(0)
  });
});

const app = express();

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath
  })
);

app.use(webpackHotMiddleware(compiler));

middlewares(app);

module.exports = app;
