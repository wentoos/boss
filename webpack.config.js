const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isDebug = process.env.NODE_ENV === 'development'

module.exports = {
  mode: isDebug? 'development' : 'production',
  entry: {
    app: [
      "./src/index"
    ],
    vendor: [
      "react",
      "mobx",
      "mobx-react",
      "react-dom",
      "react-router",
    ]
  },
  serve: {
    hot: true,
    port: 3000,
    host: "0.0.0.0",

  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "app.[hash].js"
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.scss|css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader?sourceMap",
          "resolve-url-loader",
          "sass-loader?sourceMap"
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          "file-loader?hash=sha512&digest=hex&name=[hash].[ext]",
          {
            loader: "image-webpack-loader",
            options: {
              optipng: {
                optimizationLevel: 7
              },
              gifsicle: {
                interlaced: false
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              mozjpeg: {
                quality: 65,
                progressive: true
              }
            }
          }
        ]
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: "file-loader"
      }
    ]
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      chunks: 'async',
      minSize: 30000,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          name: 'vendor',
          chunks: 'initial',
          priority: -10,
          reuseExistingChunk: false,
          test: /node_modules\/(.*)\.js/
        }
      }
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({hash: false, template: "./index.html"}),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/)
  ]
};

  module.exports.serve = {
    // 配置监听端口，默认值 8080
    port: 3000,
    open: true,
    hot: true,
    host: "0.0.0.0"
  }
