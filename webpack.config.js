const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
  entry: path.join(__dirname, 'src', 'index.pug'),
  output: {
    path: path.resolve(__dirname, 'www'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.pug$/, use: ['pug-loader'] },
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
      // entry
      template: path.resolve(__dirname, './src', 'index.pug'),
      // output
      filename: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    port: 9000,
    filename: 'index.pug',
    compress: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    open: true
  }
}

module.exports = (env, argv) => {
  if (argv.mode === 'development') {}
  if (argv.mode === 'production') {}
  return config;
}
