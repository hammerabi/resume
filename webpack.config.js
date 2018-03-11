const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: "babel",
        query: {
          presets: [
            require.resolve("babel-preset-es2015"),
            require.resolve("babel-preset-react"),
            require.resolve("babel-preset-stage-0")
          ]
        }
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /.scss$/,
        loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"
      },
      {
        test: /\.css$/,
        loader: "style!css!"
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        loaders: ["file-loader?name=[path][name].[ext]"]
      },
      {
        test: /\.(ttf|eot|woff|woff2|svg\?)+/,
        loader: "file-loader"
      }
    ]
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      styles: path.join(__dirname, "src/styles"),
      commonComponents: path.join(__dirname, "src/components"),
      utils: path.join(__dirname, "src/utils"),
    }
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
