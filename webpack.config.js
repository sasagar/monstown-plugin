module.exports = {
  entry: "./block.js", // ビルド前
  output: {
    path: __dirname,
    filename: "block.build.js" // ビルド後
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: "babel-loader",
        exclude: /node_modules/
      }
    ]
  }
};
