// 该配置基于webpack2.0 详情查看 https://webpack.js.org/guides/migrating/
const path = require('path'); // 导入路径包
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  devtool: 'eval-source-map',//配置生成Source Maps，选择合适的选项
  entry: './main.js', //入口文件
  output: {
    path: path.resolve(__dirname, 'build'), // 指定打包之后的文件夹
    // publicPath: '/public/', // 指定资源文件引用的目录，也就是说用/assests/这个路径指代path，开启这个配置的话，index.html中应该要引用的路径全部改为'/assets/...'
    // filename: 'bundle.js' // 指定打包为一个文件 bundle.js
    filename: 'bundle.js' // 可以打包为多个文件
  },
  devServer: {
    // historyApiFallback: true,
    // contentBase: "./",
    // quiet: false, //控制台中不输出打包的信息
    // noInfo: false,
    // hot: true, //开启热点
    inline: true, //开启页面自动刷新
    // lazy: false, //不启动懒加载
    // progress: true, //显示打包的进度
    // watchOptions: {
    //     aggregateTimeout: 300
    // },
    // port: '8089', //设置端口号
    //其实很简单的，只要配置这个参数就可以了
    proxy: {
      '/rsys-patient/': {
        target: 'http://192.168.0.113:8080/',
        // target: 'http://192.168.0.111:8080/',
        secure: false
      }
    },
    host:'0.0.0.0'

  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './index.html' // 模版文件
    // })

  ],
  // 使用loader模块
  module: {
    /* 在webpack2.0版本已经将 module.loaders 改为 module.rules 为了兼容性考虑以前的声明方法任然可用，
  同时链式loader(用!连接)只适用于module.loader，
  同时-loader不可省略 */
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader', {
          loader: 'css-loader',
          options: {
            // modules: true // 设置css模块化,详情参考https://github.com/css-modules/css-modules
          }
        }, {
          loader: 'postcss-loader',
          // 在这里进行配置，也可以在postcss.config.js中进行配置，详情参考https://github.com/postcss/postcss-loader
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }
      ]
    }, {
      test: /\.styl(us)?$/,
      use: [
        'style-loader', 'css-loader', {
          loader: "postcss-loader",
          options: {
            plugins: function () {
              return [
                require('autoprefixer')
              ];
            }
          }
        }, 'stylus-loader'
      ]
    },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'px2rem-loader',
          // options here
          options: {
            remUni: 75,
            remPrecision: 8
          }
        }]
      }]
  }
}
