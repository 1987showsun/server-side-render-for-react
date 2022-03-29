/*
 *   Copyright (c) 2021
 *   All rights reserved.
 */

const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpackNodeExternals = require('webpack-node-externals');

const { NODE_ENV } = process.env;

const CLIENT_CONFIG = {
  mode: NODE_ENV,
  entry: ['@babel/polyfill', './src/browser/client.js'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000000,
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
    ],
  },
  devServer: {
    port: 8080,
    historyApiFallback: true,
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: './src/server/assets',
          to: 'assets',
          noErrorOnMissing: true,
        },
      ],
    }),
  ],
  // optimization: {
  //   splitChunks: {
  //     chunks: 'initial',
  //     minChunks: 1,
  //     maxAsyncRequests: 6,
  //     maxInitialRequests: 4,
  //     automaticNameDelimiter: '~',
  //     cacheGroups: {
  //       vendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         enforce: true,
  //         name: 'modules',
  //       },
  //       default: {
  //         minChunks: 1,
  //         priority: -20,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // },
  performance: {
    hints: false,
  },
};

const SERVER_CONFIG = {
  mode: NODE_ENV,
  target: 'node',
  entry: ['@babel/polyfill', './src/server/server.js'],
  externals: [webpackNodeExternals()],
  output: {
    path: path.resolve(__dirname, './'),
    filename: 'server.js',
    libraryTarget: 'commonjs2',
  },
  module: {
    rules: [
      {
        test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000000,
            },
          },
          'image-webpack-loader',
        ],
      },
      {
        test: /.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
};

module.exports = [CLIENT_CONFIG, SERVER_CONFIG];
