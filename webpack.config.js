const path = require("path");
//missing code on line 3 for this to function - compare to Alejandro's
const HtmlWebpackPlugin

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env"],
        },
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
  })]
};
