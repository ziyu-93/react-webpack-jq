# My study
    react/webpack/jq

[下载](https://github.com/ziyu-93/react-webpack-jq/archive/master.zip "悬停显示")
# Perform the following steps to view the effect.

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
    git checkout master

    git merge origin/master --allow-unrelated-histories

    git rm --cached <文件名字>
