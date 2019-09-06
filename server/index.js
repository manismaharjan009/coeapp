const http = require('http');
const config = require('./config');

const production = process.env.NODE_ENV === 'production';
const serverConfig = production ? config.server.production : config.server.development;
const app = production ? require('./server.prod.js') : require('./server.dev.js');


const httpServer = {
  start: function() {
    const httpServer = http.createServer(app);
    // httpServer.listen(serverConfig.port, serverConfig.ip);
    httpServer.listen(serverConfig.port);
    console.log(`Server running at http://localhost:${serverConfig.port}`); // eslint-disable-line
  }
};

httpServer.start();