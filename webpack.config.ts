import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';
import { Configuration } from 'webpack';

const config: Configuration = {
  entry: './src/index.tsx',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'ts-loader', 'eslint-loader']
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve( __dirname, 'dist' ),
    filename: 'main.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
  ]
};

export default config;
