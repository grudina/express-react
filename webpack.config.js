module.exports = {
    entry: './components/Calc.js',
    output: {
        path: './',
        filename: 'public/index-react.js'
    },

    watch: true,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};