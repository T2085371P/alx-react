// webpack configuration
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        header: './modules/header/header.js',
        body: './modules/body/body.js',
        footer: './modules/footer/footer.js',
    },
    plugins: [ new CleanWebpackPlugin(), new HtmlWebpackPlugin() ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    devServer: {
        contentBase: path.join(__dirname, './public'),
        compress: true,
        port: 8564,
        open: true,
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
  },
  module: { 
    rules: [
        {
            test: /\.css$/,
            use: ["style-loader", "css-loader"],
        },
        {
            test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
            type: 'asset/resource',
            use: ["file-loader", {
                loader: "image-webpack-loader"
            }]
        },
        ]
    }, 
};
