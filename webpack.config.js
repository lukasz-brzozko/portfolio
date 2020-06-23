const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "production",

  entry: "./public/js/script.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contentHash].js",
  },

  devServer: {
    open: true,
    port: 3000,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sass|scss)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.jpe?g$|\.ico$|\.gif$|\.png$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]",
          outputPath: "img",
        },
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader?removeSVGTagAttrs=false",
      },
      {
        test: /\.txt$/i,
        use: "raw-loader",
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-proposal-class-properties"],
          },
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.[contentHash].css",
    }),
  ],
};
