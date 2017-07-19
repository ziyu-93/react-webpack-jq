//引用webpack
const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
//打包html
const HtmlWebpackPlugin = require("html-webpack-plugin");
//css 分开打包的插件 渐进增强，或者需要分离一个css文件
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const ROOT_PATH = path.resolve(__dirname);
const APP_PATH = path.resolve(ROOT_PATH, 'app'); //__dirname 中的src目录，以此类推
const APP_FILE = path.resolve(APP_PATH, 'index'); //根目录文件app.jsx地址
const BUILD_PATH = path.resolve(ROOT_PATH, 'build/dist'); //发布文件所存放的目录/pxq/dist/前面加/报错？
module.exports = {
  //默认的基础路径
  context: ROOT_PATH,
  //入口
  entry: {
    app: APP_FILE,
    views: ['isomorphic-fetch',
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'antd',
      'moment'
    ]
  },
  //出口
  output: {
    // 输出的打包文件
    filename: '[name].bundle.js',
    //chunkFilename: "[name].[chunkhash].js"
    path: BUILD_PATH,
    // 对于热替换(HMR)是必须的，让 webpack 知道在哪里载入热更新的模块(chunk)
    // 开发模式下，的publicPath 可能是/   生产模式下 是上线的地址
    publicPath: './dist/',
    chunkFilename: '[name].[chunkhash:5].min.js',
  },

  //不知道这个 watch 写与不写的区别
  watch: true,

  resolve: {
    //默认可以别这几个后缀名，webpack自行添加
    extensions: [".jsx", ".json", ".js", "scss", " ", ".css"],
    modules: [path.resolve(__dirname, 'node_modules')],
    //直接查找目标文件，从而减少webpack的递归查找文件
    alias: {
      'react': 'react/dist/react.js',
      'react-dom': 'react-dom/dist/react-dom.js'
    }
  },
  //devtool 用于在浏览器查看代码结构。
  devtool: 'inline-source-map',

  //模块项
  module: {
    rules: [{
      // /^((?!my_legacy_code).)*\.js$/  除了my_legacy_code 这个文件夹其他文件夹 babel编译
      test: /\.jsx?$/,
      exclude: /^node_modules$/,
      use: ['babel-loader?cacheDirectory']
    },
      {
        test: /\.html$/,
        exclude: /^node_modules$/,
        //打包html
        use: [
          "html-loader"
        ]
      },
      //分离打包css文件的时候，将style-loader 更换为extract-text-webpack-plugin插件
      {
        test: /\.(scss|sass)/,
        exclude: /^node_modules$/,
        //webpack2 官网issue webpack-dev-server 2.2.1 extract-text-webpack-plugin “没有热模块更换” 分开打包的时候，更改css hot-update.js 已经改变了，但是页面没有自动刷新。
        // 解决方法是加入 css-hot-loader 插件给样式自定义一个 hot-loader
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader",
            //压缩方式
            options: {
              minimize: true
            }
          },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            },
            //自动添加浏览器兼容
            {
              loader: "postcss-loader",
              options: {
                plugins() {
                  return [
                    require("autoprefixer")
                  ]
                }
              }
            }
          ]
        })),
      },
      //图片压缩
      {
        test: /\.(jpe?g|svg|png|gif)$/,
        use: {
          loader: 'file-loader?',
          options: {
            limit: 10000,
            name: 'images / [hash:5].[name].[ext]'
          }
        }
      },
      //字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000
          }
        }
      },
      //csv,tsv导入文件的插件
      {
        test: /\.(csv|tsv)$/,
        use: 'csv-loader'
      },
      //xml导入文件插件
      {
        test: /\.xml$/,
        use: 'xml-loader'
      },
      // enforce: 'pre' 用来提示错误的，有两个属性值，一个是pre  另一个是post
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: "source-map-loader"
      },
      {
        enforce: 'pre',
        test: /\.tsx?$/,
        use: "source-map-loader"
      }
    ]
  },

  //配置工具 也就是需要打包的部分 插件项
  plugins: [

    //在 ouput 的文件里， 如果有模块加载了两次或者多次， 它就会被打包进一个叫common.js文件里， 之后就可以缓存文件了。 避免了多次加载
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      filename: "vendor.bundle.js",
      minChunks: Infinity, //也可以是具体的数字  出现几次即打包在一起
    }),

    //打包 html
    new HtmlWebpackPlugin({
      title: "React",
      //打包入口
      template: path.resolve(__dirname, "app/index.html"),
      //打包出口
      filename: path.join(__dirname, "build/index.html"),
      //js插入的位置，true/'head'/'body'/false 写了这个inject，打包出来的js文件就不会再次被依赖到html中了。在未打包前，讲js引入html
      // inject: false,
      //压缩html
      minify: {
        //移除HTML中的注释 实验是有用的
        removeComments: true,
        //删除空白符与换行符 实验是有用的
        collapseWhitespace: true
      }
    }),
    //DefinePlugin 在原始的源码中执行查找和替换操作，在导入的代码中，任何出现 process.env.NODE_ENV 的地方都会被替换为 production
    new webpack.DefinePlugin({
      //NODE_ENV 是一个node.js暴露给运行脚本的体统环境变量。
      // 'process.env.NODE_ENV': JSON.stringify('production')
      'process.env': {
        'NODE_ENV': JSON.stringify("production")
      }
    }),
    //压缩js文件
    //package.json 里配置build => webpack 是打包，webpack -p打包并压缩
    //这个在浏览器 console 部分，会有报错，大概翻译就是说，这个压缩打包的方法是一个 React 的开发缩小版本，生产环境部署的时候，要确保跳过开发 warnings 的生产构建。
    new webpack.optimize.UglifyJsPlugin({ //使用 uglifyjs-webpack-plugin 插件一个效果。
      //紧凑的输出
      beautify: false,
      //删除所有注释
      comments: false,
      compress: {
        //UglifyJs删除没有用到的代码时不出警告warnings false 不出警告
        warnings: false,
        //删除所有的`console`语句
        //还可以兼容 ie 浏览器
        drop_console: false,
        // 内嵌定义了但是只用到一次的变量
        collapse_vars: true,
        // 提取出出现多次但是没有定义成变量去引用的静态值
        reduce_vars: true,
      }
    }),

    //分开打包css
    new ExtractTextPlugin({
      filename: "[name].bundle.css",
      allChunks: true,
    }),
  ]

};
