# My study
    react/webpack/jq


# Perform the following steps to view the effect.
[ Download zip ](https://github.com/ziyu-93/react-webpack-jq/archive/master.zip "悬停显示")

    1、npm install.

    2、npm start.

    3、localhost:3000

# Build webpack
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
    git checkout master 切换仓库

    git merge origin/master --allow-unrelated-histories

    当pull不下来并且提示 histories 的时候使用

    git rm --cached <文件名字> 删除远程文件

    从新 git commit -m "要删除的文件"

    git push 上传
