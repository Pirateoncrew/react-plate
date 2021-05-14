const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const optimization = {
  runtimeChunk: {
    name: "webpackManifest",
  },
  minimize: true,
  minimizer: [
    new TerserPlugin({
      test: /\.js(\?.*)?$/i,
      extractComments: false,
      parallel: true,
      terserOptions: {
        mangle: true,
        keep_fnames: true,
        warnings: false,
        ie8: false,
      },
    }),
    new OptimizeCssAssetsPlugin({}),
  ],
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_mdules[\\/]/,
        name: "common",
        enforce: true,
        chunks: "all",
      },
      main: {
        name: "main",
        chunks: "all",
        minChunks: 4,
      },
    },
  },
};

const entry = {
  app: "./src/client.tsx",
  vendor: ["react", "react-dom"],
};

const output = {
  filename: "[name].bundle.js",
  path: path.resolve(__dirname, "build/public"),
  publicPath: "/build/public",
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

const plugins = [new UglifyJsPlugin()];

module.exports = {
  target: "node",
  entry,
  output,
  devtool: "source-map",
  // devtool: "inline-source-map",
  resolve,
  module: moduleClient,
  // optimization,
  plugins,
};
