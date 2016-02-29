var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'client', '/app.js'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'index-react.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                query: {
                    stage: 0
                }
            }
        ]
    }
};