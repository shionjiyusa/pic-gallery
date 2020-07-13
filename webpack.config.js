const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.jsx',
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: './dist',
    open: true,
    port: 3000,
    // overlay: true, // 浏览器直接显示命令行的错误
    hot: true,
    historyApiFallback: true,
    // hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: 'babel-loader',
          options: {
            name: '[name].[ext]',
            limit: 10240,
          },
        },
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js', '.json'],
    alias: {
      pages: path.resolve(__dirname, 'src/pages'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};
