/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const WebpackShellPlugin = require('webpack-shell-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const common = require('./webpack.common');
const webpackGlobConfig = require('./webpack.globs.js');

const theme = require(`${webpackGlobConfig.APP_DIR}/js/config/antOverride.ts`);

const prodConfig = merge(common, {
  mode: 'production',
  // entry: ["@babel/polyfill", 'whatwg-fetch', `${webpackGlobConfig.APP_DIR}/js/index.jsx`],
  entry: ['whatwg-fetch', `${webpackGlobConfig.APP_DIR}/js/index.tsx`],
  output: {
    path: webpackGlobConfig.BUILD_DIR,
    filename: 'bundle.[hash].js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // minimize: true
              url: false
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.(less)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {              
              url: false,              
            }
          },
          {
            loader: 'less-loader',
            options: {
              modifyVars: theme,
              javascriptEnabled: true,
            }
          }          
        ]
      },
      {
        loader: 'webpack-ant-icon-loader',
        enforce: 'pre',
        options:{
          chunkName:'antd-icons'
        },
        include: [
          require.resolve('@ant-design/icons/lib/dist')
        ]
      }
    ]
  },
  plugins: [
    // new CleanWebpackPlugin([`${webpackGlobConfig.BUILD_DIR}/**/*`], {
    //   root: path.resolve(`${__dirname}/../..`)
    // }),
    //{ cleanOnceBeforeBuildPatterns: [`${webpackGlobConfig.BUILD_DIR}/**/*`]}
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'COE - App',
      template: `${webpackGlobConfig.APP_DIR}/index.prod.html`,
      hash: false,
      // minify: {
      //   collapseWhitespace: true
      // }
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    // new BundleAnalyzerPlugin(),
    new CopyWebpackPlugin([{
      from: `${webpackGlobConfig.APP_DIR}/assets`,
      to: `${webpackGlobConfig.BUILD_DIR}/assets`
    }]),
    /* new WebpackShellPlugin({
      onBuildEnd: [
        `cp dist/bundle.js ../Enza.ProcessingApp.Web/Scripts/`,
        `cp dist/bundle.js.map ../Enza.ProcessingApp.Web/Scripts/`,
        `cp dist/style.css ../Enza.ProcessingApp.Web/Content/`,
      ]
    }) */

  ],
  optimization: {
    minimizer: [
      /* new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // set to true if you want JS source maps,
      }), */
      /* instead of uglify, terser used */
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // use more options
      }),
      new OptimizeCSSAssetsPlugin({}),
    ]
  },
  stats: "errors-only"
});

module.exports = prodConfig;
