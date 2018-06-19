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
      "react-dom",
    ]
  },
  devServer: {
    port: 9000, //端口改为9000
    open: true // 自动打开浏览器，适合懒人
  },
  output: {
    path: path.join(__dirname, "dist"),
    publicPath: "/",
    filename: "app.[hash].js"
  },
  devtool: "cheap-eval-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css", ".less", ".json"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader!ts-loader"
      },
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
      name: 'mainfest'
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
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  // 写在这里是不会将组件打包进去的可以使用cdn
  // 大家可能对externals字段有所疑惑。 我们想要避免把所有的React都放到一个文件里，因为会增加编译时间并且浏览器还能够缓存没有发生改变的库文件。
  // 理想情况下，我们只需要在浏览器里引入React模块，但是大部分浏览器还没有支持模块。 因此大部分代码库会把自己包裹在一个单独的全局变量内，比如： jQuery或_。 这叫做“命名空间”模式，webpack也允许我们继续使用通过这种方式写的代码库。 通过我们的设置 "react": "React"，webpack会神奇地将所有对"react"的导入转换成从React全局变量中加载。
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({hash: false, template: "./index.html"}),
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/)
  ]
};
