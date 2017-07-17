module.exports = {
    entry: "./src/js/main.js",
    output: {
        path: "D:\\A03-NCM-Data\\JS_Practices\\flux-demo\\dist",
        filename: "bundle.js",
        publicPath: "/"
    },
    devServer: {
        inline: true,
        contentBase: "D:\\A03-NCM-Data\\JS_Practices\\flux-demo\\dist"
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