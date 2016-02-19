const express = require('express')
const path = require('path')

const app = express()
const port = 4500

if(process.env.NODE_ENV ==='development'){
var webpack = require('webpack')
  var webpackDevMiddleware = require('webpack-dev-middleware')
  var webpackHotMiddleware = require('webpack-hot-middleware')
  var config = require('./webpack.dev.config')

  const compiler = webpack(config)

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }))
  app.use(webpackHotMiddleware(compiler))
}

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname, './client/index.html'))
})

if(process.env.NODE_ENV === 'production'){
  app.use('/static/', express.static(path.join(__dirname, './dist')))
}

app.listen(port, function(err){
  if(err){
    throw new Error(err)
  }else{
    console.log(`server listen on:  ${port}`)
  }
})
