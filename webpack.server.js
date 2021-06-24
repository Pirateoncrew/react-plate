
const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin");

const moduleServer = {
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
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      loader: "asset/resource",
    },
  ],
};
const output = {
  filename: "bundle.js",
  path: path.resolve(__dirname, "dist"),
  publicPath: "/dist/bundle",
};
const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
};
const plugins = [
  // new MiniCssExtractPlugin(),
  // new UglifyJsPlugin(),
  // new CopyWebpackPlugin({
  //   patterns: [
  //     { from: "src/assets/icons", to: "public/assets/icons" },
  //     { from: "src/assets", to: "public/" },
  //   ],
  // }),
];
module.exports = {
  target: "node",
  entry: "./server.js",
  output,
  mode: "development",
  // devtool: "source-map",
  resolve,
  module: moduleServer,
  externals: [webpackNodeExternals()],
  plugins,
};
