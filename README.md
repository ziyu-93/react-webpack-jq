# My study
    react/webpack/jq插入

    [下载压缩包](https://github.com/ziyu-93/react-webpack-jq/archive/master.zip)
## 执行以下步骤，查看效果/Perform the following steps to view the effect.

    1、npm install.

    2、npm start.

    3、localhost:3000

## build webpack2
    module.exports={

      //公共路径 context,

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

## pull Error and .gitignore Error
    git checkout master

    git merge origin/master --allow-unrelated-histories

    git rm --cached <文件名字>
