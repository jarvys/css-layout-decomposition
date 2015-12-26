module.exports = {
    devtool: 'source-map',
    entry: "./src/index.js",
    output: {
        path: __dirname + '/js/',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.css$/,
            loader: "style!css"
        }, {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel' // 'babel-loader' is also a legal name to reference
        }]
    }
};
