const path = require("path");

module.exports = {
  entry: [
    "./src/index.jsx"
  ],
  output: {
    path: __dirname,
    publicPath: "/",
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      styles: path.join(__dirname, "src/styles") 
    }
  },
  resolveLoader: {
    root: path.join(__dirname, "node_modules")
  },
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
    extensions: ["", ".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: "./"
  }
};
