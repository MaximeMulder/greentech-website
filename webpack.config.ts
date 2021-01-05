import EslintWebpackPlugin from 'eslint-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const mode = process.env.NODE_ENV as 'development' | 'production';
const dev = mode === 'development';

const config: Configuration = {
  mode,
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
        use: [
          dev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(jpg|png|svg|woff|woff2|eot|ttf|otf)$/,
        loader: 'file-loader',
        options: {
          publicPath: '/'
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
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
    }),
    new MiniCssExtractPlugin()
  ]
};

export default config;
