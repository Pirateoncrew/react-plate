const { merge } = require("webpack-merge");
const common = require("./webpack.client.js");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const output = {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "build/public"),
  publicPath: "/",
};
const entry = {
  app: "./src/client.tsx",
  vendor: ["react", "react-dom"],
};

const resolve = {
  extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
};

const moduleClient = {
  rules: [
    {
      test: /\.(css|scss)$/,
      use: ["style-loader", "css-loader", "sass-loader"],
    },
    {
      test: /\.(ts|js)x?$/,
      loader: "babel-loader",
      exclude: "/node_modules/",
    },
  ],
};

module.exports = {
  entry,
  output,
  mode: "development",
  devtool: "source-map",
  watch: true,
  devServer: {
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
  module: moduleClient,
  resolve: resolve,
};
