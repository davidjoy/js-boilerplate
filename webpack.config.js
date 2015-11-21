module.exports = {
    entry: "./index.js",
    devtool: 'source-map',
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            {test: /\.less$/, loader: "style!css!less"},
            {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
        ]
    }
};
