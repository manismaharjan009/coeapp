const path = require('path');
const SimpleProgressPlugin = require('simple-progress-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const webpackGlobConfig = require('./webpack.globs.js');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');
const tsImportPluginFactory = require('ts-import-plugin');

const config = {
  // output: {
  //   path: webpackGlobConfig.BUILD_DIR,
  //   filename: 'bundle.[hash].js',
  // },
  module: {
    rules: [
      // https://github.com/Brooooooklyn/ts-import-plugin
      // {
      //   test: /\.(ts|tsx)$/,
      //   loaders: ['react-hot-loader/webpack', 'awesome-typescript-loader']
      // },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use:  [
          {
            loader: 'react-hot-loader/webpack'
          },
          {
            loader: 'awesome-typescript-loader',
            options: {
              getCustomTransformers: () => ({
                before: [tsImportPluginFactory({
                  libraryName: 'antd',
                  libraryDirectory: 'es',
                  style: true
                })]
              }),
            },
          }
        ]        
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]?[hash]',
              outputPath: 'assets/images/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|ttf|eot)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: [':data-src']
          }
        }
      }
    ]
  },
  context: __dirname,
  target: 'web',
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx']
  },
  plugins: [
    new SimpleProgressPlugin(),
    new FaviconsWebpackPlugin({
      logo: `${webpackGlobConfig.APP_DIR}/assets/images/logo.svg`,
      emitStats: false,
      prefix: 'assets/images/favicon/',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new WebpackPwaManifest({
      filename: "manifest.json",
      name: 'COE App',
      short_name: 'COE',
      description: 'COE Meeting application',
      start_url: './index.html',
      // background_color: '#ffffff',
      // crossorigin: 'null', //can be null, use-credentials or anonymous
      includeDirectory: true,
      icons: [
        { 
          src: path.resolve(`${webpackGlobConfig.APP_DIR}/assets/images/icon.png`),
          sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
          destination: path.join('assets', 'images','icons')
        },
        {
          src: path.resolve(`${webpackGlobConfig.APP_DIR}/assets/images/large-icon.png`),
          size: '1024x1024', // you can also use the specifications pattern
          destination: path.join('assets', 'images', 'icons')
        }
      ]
    }),
    new SWPrecacheWebpackPlugin({
      cacheId: 'coe',
      dontCacheBustUrlsMatching: /\.\w{8}\./,
      fileName: 'service-worker.js',
      staticFileGlobs: [
        `${webpackGlobConfig.BUILD_DIR}/**/*.{html,css,js,png,jpg,gif,svg,eot,ttf,woff,woff2}`,
        //   /\.(css | js | woff | jpg | png | svg)$/
      ],
      stripPrefix: `${webpackGlobConfig.BUILD_DIR}`,
      logger(message) {
        if (message.indexOf('Total precache size is') === 0) {
          // This message occurs for every build and is a bit too noisy.
          return;
        }
        console.log(message);
      },
      minify: true, // minify and uglify the script
      navigateFallback: '/index.html',
      staticFileGlobsIgnorePatterns: [/\.map$/, /manifest\.json$/],

    })
  ]
};

module.exports = config;
