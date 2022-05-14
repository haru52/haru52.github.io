/* eslint-disable import/no-extraneous-dependencies */
import globule from 'globule';
import HtmlWebpackPlugin = require('html-webpack-plugin');
import MiniCssExtractPlugin = require('mini-css-extract-plugin');
import path from 'path';
import webpack from 'webpack';
import 'webpack-dev-server';
/* eslint-enable import/no-extraneous-dependencies */

function initHtmlWebpackPlugins() {
  const pagesGlob = 'src/pages/**/';
  const pugPaths = globule.find(`${pagesGlob}*.pug`, {
    ignore: `${pagesGlob}_*.pug`,
  });

  return pugPaths.map((pugPath: string) => {
    const outputHtmlFilename = path.basename(pugPath).replace('.pug', '.html');
    return new HtmlWebpackPlugin({
      filename: path.join(path.resolve(__dirname, 'docs'), outputHtmlFilename),
      template: pugPath,
    });
  });
}

const config: webpack.Configuration = {
  entry: './src/scripts/index.ts',
  output: {
    path: path.resolve(__dirname, 'docs'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.pug$/,
        use: [
          {
            loader: 'pug-loader',
            options: {
              root: path.resolve(__dirname, 'src/pages'),
            },
          },
        ],
      },
    ],
  },
  plugins: [new MiniCssExtractPlugin(), ...initHtmlWebpackPlugins()],
};

export default config;
