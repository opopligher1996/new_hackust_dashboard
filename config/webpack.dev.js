/* webpack.dev.config.js */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const AntdScssThemePlugin = require('antd-scss-theme-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { ReactLoadablePlugin } =  require('react-loadable/webpack');
//const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  // Tell webpack to begin building its
  // dependency graph from this file.
  entry: path.join(__dirname, '../src', 'js', 'App.js'),
  // And to place the output in the `build` directory
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    alias: {
      Styles: path.resolve(__dirname, '../src/styles'),
      Asset: path.resolve(__dirname, '../src/assets'),
      Components: path.resolve(__dirname, '../src/js/components'),
      Containers: path.resolve(__dirname, '../src/js/containers'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        /* We'll leave npm packages as is and not
           parse them with Babel since most of them
           are already pre-transpiled anyway. */
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.scss$|\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: "css-loader" },
          AntdScssThemePlugin.themify({
            loader: 'sass-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          })
        ]
        // use: ['style-loader', 'css-loader', 'sass-loader']
      },
      // {
      //   test: /\.less$/,
      //   use: [{
      //     loader: 'style-loader' // creates style nodes from JS strings
      //   }, {
      //     loader: 'css-loader' // translates CSS into CommonJS
      //   },
      //   //AntdScssThemePlugin.themify('less-loader'),
      //   // {
      //   //   loader: 'less-loader', // compiles Less to CSS
      //   //   options: {
      //   //     javascriptEnabled: true
      //   //   }
      //   // }
      // ]
      // },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          AntdScssThemePlugin.themify({
            loader: 'less-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
              javascriptEnabled: true
            },
          }),
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /node_modules/,
        use: [{
          /* inline if smaller than 10 KB, otherwise load as a file */
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }]
      },
      {
        test: /\.(eot|svg|ttf|woff2?|otf)$/,
        exclude: /node_modules/,
        use: 'file-loader'
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    //new CleanWebpackPlugin(['public']),
    new HtmlWebpackPlugin({
      template: "./src/public/index.html",
      filename: "./index.html"
    }),
    new LodashModuleReplacementPlugin,
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new AntdScssThemePlugin(path.join(__dirname, '../src', 'js', 'utils', 'theme.scss')),
    new ReactLoadablePlugin({
      filename: './dist/react-loadable.json',
    }),
    new BundleAnalyzerPlugin()
  ]
}
