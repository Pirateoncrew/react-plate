// const path = require("path");
// const webpackNodeExternals = require("webpack-node-externals");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// module.exports = {
//   target: "node",
//   entry: "./server.js",
//   output: {
//     filename: "bundle.js",
//     path: path.resolve(__dirname, "build"),
//     publicPath: "/build",
//   },
//   devtool: "source-map",
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(css|scss)$/,
//         loader: "ignore-loader",
//       },
//       {
//         test: /\.(ts|js)x?$/,
//         loader: "babel-loader",
//         exclude: "/node_modules/",
//       },
//     ],
//   },
//   plugins: [new MiniCssExtractPlugin()],
//   externals: [webpackNodeExternals()],
// };

const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

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
  ],
};
const output = {
  filename: "bundle.js",
  path: path.resolve(__dirname, "build"),
  publicPath: "/build",
};
const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
};
const plugins = [
  new MiniCssExtractPlugin(),
  new UglifyJsPlugin(),
  new CopyWebpackPlugin({
    patterns: [{ from: "src/assets/icons", to: "public/assets/icons" }],
  }),
];
module.exports = {
  target: "node",
  entry: "./server.js",
  output,
  devtool: "source-map",
  resolve,
  module: moduleServer,
  externals: [webpackNodeExternals()],
  plugins,
};
