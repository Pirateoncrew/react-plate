const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  target: "node",
  entry: {
    app: "./src/client.tsx",
    vendor: ["react", "react-dom"],
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "build/public"),
    publicPath: "/build/public",
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        use: [
          // MiniCssExtractPlugin.loader,
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(ts|js)x?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  // plugins: [new MiniCssExtractPlugin({ filename: "style.css" })],
};
