const path = require('path');
const rootPath = path.normalize(`${__dirname}/..`);

const app = {
  rootPath,
  publicPath: `${rootPath}/dist`,
  devPath: `${rootPath}/client/src`,
  buildPath: `${rootPath}/dist`,
};


const server = {
  development: {
    port: process.env.PORT || '3300',
    ip: '0.0.0.0',
    routerBasePath: '/api'
  },
  production: {
    port: process.env.PORT || '8888',
    ip: '0.0.0.0',
    routerBasePath: '/api'
  }
};
//url: https://cloud.mongodb.com/
//pwd: m@..009
const db = {
  development: 'mongodb://localhost:27017/quotes',
  mlab: 'mongodb+srv://manish:maharjan@cluster0-0ordt.mongodb.net/test?retryWrites=true&w=majority'
}

module.exports = {
  app,
  server,
  db
}
