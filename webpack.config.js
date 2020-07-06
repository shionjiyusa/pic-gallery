const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist",
    open: true,
    port: 3000,
    hot: true,
    // hotOnly: true,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader: "babel-loader",
          options: {
            name: "[name].[ext]",
            limit: 10240,
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
};
