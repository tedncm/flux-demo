module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: "/Users/teddy/Developer/JS-DEV/cart-demo/dist",
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        contentBase: "/Users/teddy/Developer/JS-DEV/cart-demo/dist"
    }
    ,
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                } 
            }
        ]
    }
};