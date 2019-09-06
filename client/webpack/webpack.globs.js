const path = require('path');

const ROOT_DIR = path.resolve(`${__dirname}/../..`);
const BUILD_DIR = path.resolve(`${__dirname}/../..`, 'dist');
const APP_DIR = path.resolve(`${__dirname}/../..`, 'client', 'src');

module.exports = {
  ROOT_DIR,
  BUILD_DIR,
  APP_DIR
};
