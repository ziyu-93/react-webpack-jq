# My study
    react/webpack/jq

    运用 react webpakc2 和 jq 插件
# Build folder
    data 手写的几个静态.json 文件

    dist/html 是通过打包出来的文件,包含公共部分，依赖插件分离，css,jsx

    libs 引用的jq 文件

    vendor 通过dll 打包分离提取出来的依赖插件。 webpack.dllPlugin.js

# Build issue
    1)、如果打包不用 UglifyJSPlugin  打包出来的bundle 会有 十多兆。

    2)、打包的时候 UglifyJsPlugin 和 devtool:inline-source-map, 有冲突改成 devtool:source-map 还有有冲突

       直接将 sourceMap:true 写在 UglifyJsPlugin 的 options 中 冲突消失。

    3)、devtool:source-map 会使得打包的时间等很久
# Perform the following steps to view the effect.
[ Download zip ](https://github.com/ziyu-93/react-webpack-jq/archive/master.zip "悬停显示")

    1、npm install. 安装node_modules 依赖

    2、npm start.  webpack.config.dev.js  development

    3、localhost:3000.

    4、npm run build.  webpack.config.dist.js  production

# Study webpack2 filename( webpack.config.js )
    module.exports={

      context,w

      enter,

      output,

      devServer,

      devtool,

      resolve,

      module={

        use plugins build html sass js jsx

      }

      plugins={

        new webpack.optimize.CommonsChunkPlugin({})

        new HtmlWebpackPlugin

        new webpack.DefinePlugin({})

        new webpack.HotModuleReplacementPlugin(),

        new webpack.NamedModulesPlugin(),

        new webpack.optimize.UglifyJsPlugin({})

        new webpack.DllReferencePlugin({})

        new ExtractTextPlugin({})

  }
}

# Pull Error and .gitignore Error
```
    git checkout master 切换仓库

    1)、当pull不下来并且提示 histories 的时候使用

        git merge origin/master --allow-unrelated-histories

    2)、git rm --cached <文件名字> 删除远程文件/git rm "地址+文件名字"

        从新 git commit -m "要删除的文件"

        git push 上传

    3)、state ={} 编辑器不报错，但是浏览器会支出错误
