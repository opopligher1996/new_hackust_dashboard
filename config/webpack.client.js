const path           = require('path'),
      webpack        = require('webpack'),
      MiniCssExtract = require("mini-css-extract-plugin"),
      UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
      BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin,
      CompressionPlugin = require('compression-webpack-plugin'),
      AntdScssThemePlugin = require('antd-scss-theme-plugin'),
      OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { ReactLoadablePlugin } =  require('react-loadable/webpack');

console.log('================process.env.NODE_ENV================', process.env.NODE_ENV);

config = {
  entry: {
    client: './src/client/client.js',
    bundle: './src/client/bundle.js'
  },
  output: {
    path: path.resolve(__dirname, '..' ,'assets'),
    filename: "[name].js",
    publicPath: '/assets/'
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ],
    // // Automatically split vendor and commons
    // // https://twitter.com/wSokra/status/969633336732905474
    // // https://medium.com/webpack/webpack-4-code-splitting-chunk-graph-and-the-splitchunks-optimization-be739a861366
    // splitChunks: {
    //   chunks: 'all',
    //   name: false,
    // },
    // // Keep the runtime chunk seperated to enable long term caching
    // // https://twitter.com/wSokra/status/969679223278505985
    // runtimeChunk: true,
  },
  resolve: {
    alias: {
      public: path.resolve(__dirname, '../src/public'),
      //'@ant-design/icons/lib/dist$': path.resolve(__dirname, './src/js/utils/icons.js')
      //'@ "@ant-design/icons":"purched-antd-icons"
    }
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      {
        test: /.(jpg|jpeg|png)$/,
        use:['url-loader']
      },
      { test: /\.scss$|\.css$/,
            use: [
                MiniCssExtract.loader, // creates style nodes from JS strings
                { loader: "css-loader?url=false" }, // translates CSS into CommonJS
                AntdScssThemePlugin.themify({
                  loader: 'sass-loader',
                  options: {
                    sourceMap: process.env.NODE_ENV !== 'production',
                  },
                })// compiles Sass to CSS, using Node Sass by default
            ]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtract.loader,
          {
            loader: 'css-loader?url=false',
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
        test: /\.(eot|svg|ttf|woff2?|otf|)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            //loader: "url-loader?name=images/[name].[ext]"
            options: {
              name: '[name].[ext]'
            }
          }
        ]
      },
    ]
 },

 plugins: [
  new MiniCssExtract({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    }),
  new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
  new CompressionPlugin({
      filename: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    }),
  new AntdScssThemePlugin(path.join(__dirname, '../src', 'js', 'utils', 'theme.scss')),
  new OptimizeCssAssetsPlugin({
    assetNameRegExp: /\.optimize\.css$/g,
    cssProcessor: require('cssnano'),
    cssProcessorPluginOptions: {
      preset: ['default', { discardComments: { removeAll: true } }],
    },
    canPrint: true
  }),
  new ReactLoadablePlugin({
    filename: './dist/react-loadable.json',
  }),
  //new BundleAnalyzerPlugin()
 ]

}

// Disable for production builds
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'cheap-module-eval-source-map'
}

module.exports = config;
