const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: {
    app: path.join(__dirname, 'src', 'index.pug'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'assets/images'
            }
          }
        ]
      },
      {
        test: [/.css$|.scss$/],
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.pug'     // path.resolve(__dirname, './src', 'index.html'),
      // filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devServer: {
    contentBase: __dirname + 'src',
    // filename: 'index.pug',
    // hot: true,
    inline: true,
    // historyApiFallback: true
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {}
  if (argv.mode === 'production') {}
  return config;
}
