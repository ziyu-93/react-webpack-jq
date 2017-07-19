# My study
    react/webpack/jq

    运用 react webpakc2 和 jq 插件

# Perform the following steps to view the effect.
[ Download zip ](https://github.com/ziyu-93/react-webpack-jq/archive/master.zip "悬停显示")

    1、npm install. 安装node_modules 依赖

    2、npm start. webpack.config.dev.js development

    3、localhost:3000.

    4、npm run build. webpack.config.dist.js production

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
