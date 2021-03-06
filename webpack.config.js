const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('path')

module.exports = {
  entry: {
    appJs: './src/js/app.ts'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      },
      {
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/],
        },
        test: /\.ts?$/,
        exclude: /node_modules/
      },
    ]
  },
  resolve: {
    extensions: ['.css', '.js', '.ts']
  },
  output: {
    filename: 'js/app.js',
    path: resolve(__dirname, 'dist')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/app.css'
    })
  ]
}
