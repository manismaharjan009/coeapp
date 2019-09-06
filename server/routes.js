const appConfig = require('./config').app;

const production = process.env.NODE_ENV === 'production';

module.exports = app => {
  if (production) {
    // app.get('/*', (request, response) => {
    app.get(/^(?!api$).*/g, (request, response) => {
      response.sendFile(`${appConfig.publicPath}/index.html`);
    });
  } else {
    app.get('/*', (request, response) => {
      response.sendFile(`${appConfig.devPath}/index.html`);
    });
  }
};

/* NOTE
  api is the the config file so need to changed if config file is to be changed
  /^(?!api$).*   this regex is to overwrite any url except starting with 'api'
*/
