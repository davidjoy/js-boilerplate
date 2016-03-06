var path = require('path');
var express = require('express');
var app = express();

console.log("Yo env: " + process.env.NODE_ENV);

var port = 8000;

if (process.env.NODE_ENV == 'development') {
    var webpack = require('webpack');
    var config = require('./webpack.config.dev');
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');

    var compiler = webpack(config);

    var webpackMiddleware = webpackDevMiddleware(compiler, {
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

    app.use(webpackMiddleware);
    app.use(webpackHotMiddleware(compiler));

    app.get('*', function response(req, res) {
        res.write(webpackMiddleware.fileSystem.readFileSync(path.join(__dirname, 'dist/index.html')));
        res.end();
    });

    app.use(express.static(__dirname + '/dist'));

    port = config._hotPort;

} else {
    // In production we seem to need to declare this before the routes below.
    app.use(express.static(__dirname + '/dist'));

    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'dist/index.html'));
    });
}



app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
  }
  console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port);
});
