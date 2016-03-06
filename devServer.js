var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');
var webpackMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();

var compiler = webpack(config);

var middleware = webpackMiddleware(compiler, {
  publicPath: config.output.publicPath,
  contentBase: 'client',
  stats: {
    colors: true,
    hash: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    modules: false
  }
})

app.use(middleware);
app.use(webpackHotMiddleware(compiler));

app.get('*', function response(req, res) {
    res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
    res.end();
});

app.use(express.static(__dirname + '/dist'));

app.listen(config._hotPort, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.info("==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.", config._hotPort, config._hotPort);
});
