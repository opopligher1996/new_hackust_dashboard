const path          = require('path'),
      webpack       = require('webpack'),
      nodeExternals = require('webpack-node-externals');

config = {
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    index: './src/server/index.js'
  },
  output: {
    path: path.resolve(__dirname, '..' ,'views/server'),
    filename: "[name].js",
    libraryTarget: "commonjs2"
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
      { test: /\.scss$|\.css|\.less$/, loader: 'ignore-loader' },
      {
          test: /\.(ttf|eot|otf|svg|png)$/,
          loader: 'file-loader?emitFile=false'
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
    ]
 }

}

// Disable for production builds
if (process.env.NODE_ENV !== 'production') {
  config.devtool = 'cheap-module-eval-source-map'
}

module.exports = config;
