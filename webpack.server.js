const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "node",
  entry: "./server.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
    publicPath: "/build",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        loader: "ignore-loader",
      },
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin()],
  externals: [webpackNodeExternals()],
};