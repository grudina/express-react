module.exports = {
    entry: './Calc.js',
    output: {
        path: './',
        filename: 'public/index-react.js'
    },

    watch: true,

    //watchOptions: {
    //    aggregateTimeout: 100
    //},
    //devServer: {
    //    inline: true,
    //    port: 3333
    //},

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/, /react/],
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
                //test: /\.jsx?$/,
                //loader: 'babel-loader',
                //exclude: /node_modules/,
                //query: {
                //    presets: ['es2015']
                //}
            }
        ]
    }
}