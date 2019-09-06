const merge = require('webpack-merge');
const common = require('./webpack.common');
const webpack = require('webpack');
const webpackGlobConfig = require('./webpack.globs.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('../../server/config');

const serverConfig = config.server.development;

const theme = require(`${webpackGlobConfig.APP_DIR}/js/config/antOverride.ts`); 

const devConfig = merge(common, {
  mode: 'development',
  //"@babel/polyfill",
  // 'react-hot-loader/patch',
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?reload=true',
    'whatwg-fetch',
    `${webpackGlobConfig.APP_DIR}/js/index.tsx`
  ],
  output: {
    pathinfo: false,
    path: webpackGlobConfig.BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
              modifyVars: theme
            }
          }
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    compress: true,
    historyApiFallback: true,
    hot: true,
    // open: true,
    port: serverConfig.port,
    host: '0.0.0.0',
    stats: "minimal"
  },
  stats: 'errors-only',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'COE App',
      template: `${webpackGlobConfig.APP_DIR}/index.html`,
      hash: true,
      minify: {
        collapseWhitespace: true
      },
      inject: false
    })
  ],
  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false
  }
});

module.exports = devConfig;
