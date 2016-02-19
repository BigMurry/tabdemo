const path = require('path')
const webpack = require('webpack')
module.exports = {
  devtool:'cheap-eval-source-map',
  entry:[
    'webpack-hot-middleware/client',
    'webpack/hot/only-dev-server',
    './client/index'
  ],
  output:{
    path:path.join(__dirname, './dist'),
    filename:'bundle.js',
    publicPath:'/static',
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[
      {
        test:/\.jsx?$/,
        loaders:['babel?presets[]=react,presets[]=es2015'],
        exclude:/node_modules/,
      },
      {
        test:/\.scss$/,
        loaders:['style','css'],
        include:path.join(__dirname,'./client/styles'),
      }
    ]
  },
  resolve:{
    extensions:['', '.js']
  }

}
