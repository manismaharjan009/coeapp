const express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const bodyParser = require('body-parser');

const config = require('./config');
const routes = require('./routes/index');
const basicRoutes = require('./routes');

const production = process.env.NODE_ENV === 'production';
const routerBasePath = production ? config.server.production.routerBasePath : config.server.development.routerBasePath;

//initialise express router
var router = express.Router();

module.exports = app => {
  // remove x-powered-by
  app.disable('x-powered-by');
  // Add express stuff
  app.use(compression());
  app.use(bodyParser.json({limit: '20mb'}));
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  // Fix for corss origin issue: TODO: add whitelisting so that it can be pushed to producion for testing later
  app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  if (production) {
    app.use(express.static(`${config.app.publicPath}`));
  } else {
    // Point static path to dist
    app.use(express.static(`${config.app.devPath}`));
  }
  
  // Set  api routes
  app.use(routerBasePath, router);
  // basic route for react rotuing
  basicRoutes(app);
  routes(router);
};
