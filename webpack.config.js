const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const webpack = require('webpack');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'src'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
                type: 'asset',
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        title: "Calorie Tracker App",
        filename: "index.html",
        template: path.resolve(__dirname, 'src/temp.html')
    }),
    new Dotenv()
    ],
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
            publicPath: '/dist'
        },
        compress: true,
        proxy: {
            '/api': 'http://localhost:3000/'
        }
    },
};
