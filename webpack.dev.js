const { merge } = require("webpack-merge");
const common = require("./webpack.client.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const output = {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "build/public"),
  publicPath: "/",
};
module.exports = merge(common, {
  output,
  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  devServer: {
    stats: {
      children: false,
      maxModules: 3,
    },
    contentBase: path.resolve(__dirname, "/"),
    port: 3000,
    compress: true,
    publicPath: "/",
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      title: "",
      template: "./index.html",
    }),
  ],
});
