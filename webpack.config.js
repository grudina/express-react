var path = require('path');

module.exports = {
    entry: path.join(__dirname, 'components', '/Calc.js'),
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
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};