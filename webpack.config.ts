import EslintWebpackPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  context: path.resolve(__dirname, 'src'),
  entry: './index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpg|png|svg|woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new EslintWebpackPlugin({
      extensions: ['ts', 'tsx']
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './images/logo-light.svg'
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      favicon: './images/logo-light.svg',
      filename: '404.html'
    })
  ]
};

export default config;
